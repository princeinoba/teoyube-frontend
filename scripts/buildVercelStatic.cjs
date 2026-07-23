const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const publicSizeLimit = 50 * 1024 * 1024;
const rootFiles = ["index.html", "app.js", "styles.css"];
const copiedTrees = ["public", path.join("src", "data")];

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function copy(relativePath) {
  const source = path.join(root, relativePath);
  const destination = path.join(dist, relativePath);
  if (!fs.existsSync(source)) throw new Error(`Required public source is missing: ${relativePath}`);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(source, destination, { recursive: true });
}

function publicReferencePath(reference) {
  const clean = reference.split(/[?#]/)[0].replace(/\\/g, "/").replace(/^\.?\//, "");
  if (clean.startsWith("media/teoyubeworld/pilot-v1/")) return `public/${clean}`;
  return clean;
}

function extractReferences(file) {
  const text = fs.readFileSync(file, "utf8");
  const references = new Set();
  const patterns = path.extname(file).toLowerCase() === ".js"
    ? [/["']((?:\/?public\/|\/?src\/data\/|\/?media\/)[^"'`]+?\.(?:png|jpe?g|webp|gif|svg|css|js|json|mp4|webm))["']/gi]
    : [
        /(?:src|href)\s*=\s*["']([^"']+)["']/gi,
        /url\(\s*["']?([^"')]+)["']?\s*\)/gi
      ];
  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const value = match[1].trim();
      if (!value || /^(?:https?:|data:|mailto:|tel:|#)/i.test(value) || value.startsWith("/api/")) continue;
      references.add(value);
    }
  }
  return [...references];
}

if (path.basename(dist) !== "dist" || path.dirname(dist) !== root) {
  throw new Error(`Refusing to clear unexpected build path: ${dist}`);
}
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of rootFiles) copy(file);
for (const tree of copiedTrees) copy(tree);

const pilotDirectory = path.join(dist, "public", "media", "teoyubeworld", "pilot-v1");
const pilotFilesAtBuild = walk(pilotDirectory);
const pilotManifest = pilotFilesAtBuild.find((file) => /manifest.*\.json$/i.test(path.basename(file)));
const optionalMediaStatus = {
  available: pilotFilesAtBuild.length > 0,
  fileCount: pilotFilesAtBuild.length,
  manifestUrl: pilotManifest
    ? `/${path.relative(dist, pilotManifest).replace(/\\/g, "/")}`
    : null,
  message: pilotFilesAtBuild.length
    ? "Published TeoyubeWorld media is available."
    : "No media has been published yet."
};
const optionalMediaStatusPath = path.join(dist, "src", "data", "optionalMediaStatus.json");
fs.mkdirSync(path.dirname(optionalMediaStatusPath), { recursive: true });
fs.writeFileSync(optionalMediaStatusPath, `${JSON.stringify(optionalMediaStatus, null, 2)}\n`);

const sourceReferenceFiles = rootFiles.map((file) => path.join(root, file));
const references = sourceReferenceFiles.flatMap(extractReferences);
const missingReferences = [...new Set(references)]
  .map((reference) => ({ reference, expected: publicReferencePath(reference) }))
  .filter(({ expected }) => !fs.existsSync(path.join(dist, expected)));

const files = walk(dist);
const relativeFiles = files.map((file) => path.relative(dist, file).replace(/\\/g, "/"));
const oversizedFiles = files
  .filter((file) => fs.statSync(file).size > publicSizeLimit)
  .map((file) => ({ path: path.relative(dist, file).replace(/\\/g, "/"), bytes: fs.statSync(file).size }));
const textFiles = files.filter((file) => /\.(?:html|css|js|json|txt|md)$/i.test(file));
const forbiddenContent = [];
for (const file of textFiles) {
  const text = fs.readFileSync(file, "utf8");
  if (/[A-Za-z]:[\\/](?:Users|Windows|Program Files)[\\/]/i.test(text)) {
    forbiddenContent.push(`${path.relative(dist, file)}: absolute Windows path`);
  }
  if (/[/\\]media-source[/\\]/i.test(text)) forbiddenContent.push(`${path.relative(dist, file)}: protected source path`);
  if (/[/\\]generated[/\\](?:teoyubeworld-media|workspace-rescue)[/\\]/i.test(text)) {
    forbiddenContent.push(`${path.relative(dist, file)}: generated owner path`);
  }
}

let sourceRevision = "uncommitted";
try {
  sourceRevision = execFileSync("git", [
    "-c",
    `safe.directory=${root.replace(/\\/g, "/")}`,
    "rev-parse",
    "--verify",
    "HEAD"
  ], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
} catch {}

const extensionCount = (extensions) => files.filter((file) => extensions.includes(path.extname(file).toLowerCase())).length;
const publicMediaFiles = relativeFiles.filter((file) => file.startsWith("public/media/teoyubeworld/pilot-v1/"));
const warnings = [];
if (!publicMediaFiles.length) {
  warnings.push("No approved TeoyubeWorld media found. Running frontend without optional media.");
}

const manifest = {
  buildTimestamp: new Date().toISOString(),
  sourceRevision,
  totalFiles: files.length + 1,
  totalBytes: files.reduce((sum, file) => sum + fs.statSync(file).size, 0),
  javascriptCount: extensionCount([".js"]),
  cssCount: extensionCount([".css"]),
  imageCount: extensionCount([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]),
  publicMediaCount: publicMediaFiles.length,
  runtimeJsonCount: extensionCount([".json"]),
  configuredPublicFileSizeLimitBytes: publicSizeLimit,
  excludedCategories: [
    "local server and owner tools",
    "media-source",
    "generated owner artifacts",
    "framework caches",
    "planning documents",
    "SQL",
    "QA and development source"
  ],
  warnings,
  missingReferences,
  oversizedFiles,
  forbiddenContent,
  files: [...relativeFiles, "build-manifest.json"],
  buildValidity: missingReferences.length === 0 && oversizedFiles.length === 0 && forbiddenContent.length === 0
};

const manifestPath = path.join(dist, "build-manifest.json");
const sourceBytes = manifest.totalBytes;
for (let attempt = 0; attempt < 5; attempt += 1) {
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const completeBytes = sourceBytes + fs.statSync(manifestPath).size;
  if (manifest.totalBytes === completeBytes) break;
  manifest.totalBytes = completeBytes;
}
console.log(`Vercel static build: ${manifest.totalFiles} files, ${(manifest.totalBytes / 1024 / 1024).toFixed(2)} MiB`);
for (const warning of warnings) console.warn(`Warning: ${warning}`);
if (!manifest.buildValidity) {
  console.error(JSON.stringify({ missingReferences, oversizedFiles, forbiddenContent }, null, 2));
  process.exitCode = 1;
}
