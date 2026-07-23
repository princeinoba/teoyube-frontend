const fs = require("fs");
const path = require("path");
const { execFileSync, spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const expectedRoot = root.replace(/\\/g, "/");
const hardLimit = 100 * 1024 * 1024;
const failures = [];

function git(args) {
  return execFileSync("git", ["-c", `safe.directory=${expectedRoot}`, ...args], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  }).trim();
}

let actualRoot = "";
let branch = "";
let remote = "";
let status = "";
try {
  actualRoot = git(["rev-parse", "--show-toplevel"]).replace(/\\/g, "/");
  branch = git(["branch", "--show-current"]);
  remote = git(["remote", "get-url", "origin"]);
  status = git(["status", "--short", "--branch"]);
} catch (error) {
  failures.push(`Git inspection failed: ${error.stderr || error.message}`);
}
if (actualRoot.toLowerCase() !== expectedRoot.toLowerCase()) failures.push(`Wrong Git root: ${actualRoot || "(unknown)"}`);
if (!branch) failures.push("Current branch is detached or unknown.");
if (!remote) failures.push("The origin remote is missing.");
for (const required of [
  "vercel.json",
  ".vercelignore",
  "scripts/buildVercelStatic.cjs",
  "scripts/validateVercelBuild.cjs",
  "dist/index.html"
]) {
  if (!fs.existsSync(path.join(root, required))) failures.push(`Required deployment file is missing: ${required}`);
}

const candidatePaths = git(["ls-files", "--cached", "--others", "--exclude-standard", "-z"])
  .split("\0")
  .filter(Boolean);
const candidates = candidatePaths
  .map((relative) => path.join(root, relative))
  .filter((file) => fs.existsSync(file) && fs.statSync(file).isFile());
const secretPattern = /(sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AIza[A-Za-z0-9_-]{20,}|BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY)/g;
for (const file of candidates) {
  const relative = path.relative(root, file).replace(/\\/g, "/");
  const size = fs.statSync(file).size;
  if (size >= hardLimit) failures.push(`File reaches GitHub's 100 MiB limit: ${relative}`);
  if (/(^|\/)(?:media-source|generated|\.next|\.tmp)(\/|$)/i.test(relative)) failures.push(`Protected/generated/cache path: ${relative}`);
  if (/\.(?:zip|7z|rar|tar|tgz)$/i.test(relative) || /\.tar\.gz$/i.test(relative)) failures.push(`Archive must not be pushed: ${relative}`);
  if (/^(?:\.env|config\/local-media-path\.json)$/i.test(relative)) failures.push(`Secret/local configuration path: ${relative}`);
  if (/\.(?:js|cjs|mjs|ts|tsx|json|html|css|md|txt|env|example)$/i.test(relative) && size < 5 * 1024 * 1024) {
    const text = fs.readFileSync(file, "utf8");
    const suspicious = [...text.matchAll(secretPattern)]
      .map((match) => match[0])
      .filter((value) => value !== "sk-secret-looking-value");
    if (suspicious.length) failures.push(`Possible secret value in ${relative}`);
  }
}

const build = spawnSync(process.execPath, [path.join(root, "scripts", "buildVercelStatic.cjs")], { cwd: root, encoding: "utf8" });
const validate = spawnSync(process.execPath, [path.join(root, "scripts", "validateVercelBuild.cjs")], { cwd: root, encoding: "utf8" });
if (build.status !== 0) failures.push("npm run build:vercel equivalent failed.");
if (validate.status !== 0) failures.push("npm run build:vercel:validate equivalent failed.");

console.log(JSON.stringify({
  status: failures.length ? "FAIL" : "PASS",
  gitRoot: actualRoot,
  branch,
  remote,
  workingTreeStatus: status,
  candidateFiles: candidates.length,
  buildPassed: build.status === 0,
  validationPassed: validate.status === 0,
  failures
}, null, 2));
console.log(`GitHub readiness: ${failures.length ? "FAIL" : "PASS"}`);
if (failures.length) process.exitCode = 1;
