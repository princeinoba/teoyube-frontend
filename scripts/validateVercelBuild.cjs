const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const githubHardLimit = 100 * 1024 * 1024;
const expectedPilotFiles = 49;
const expectedPilotRecords = 12;
const errors = [];
const warnings = [];

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function normalizeReference(reference) {
  const clean = reference.split(/[?#]/)[0].replace(/\\/g, "/").replace(/^\.?\//, "");
  return clean.startsWith("media/teoyubeworld/pilot-v1/") ? `public/${clean}` : clean;
}

function checkDocumentReferences(file) {
  const text = fs.readFileSync(file, "utf8");
  const patterns = path.extname(file).toLowerCase() === ".js"
    ? [/["']((?:\/?public\/|\/?src\/data\/|\/?media\/)[^"'`]+?\.(?:png|jpe?g|webp|gif|svg|css|js|json|mp4|webm))["']/gi]
    : [
        /(?:src|href)\s*=\s*["']([^"']+)["']/gi,
        /url\(\s*["']?([^"')]+)["']?\s*\)/gi
      ];
  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const reference = match[1].trim();
      if (!reference || /^(?:https?:|data:|mailto:|tel:|#)/i.test(reference) || reference.startsWith("/api/")) continue;
      const expected = normalizeReference(reference);
      if (!fs.existsSync(path.join(dist, expected))) errors.push(`Missing reference from ${path.basename(file)}: ${reference}`);
    }
  }
}

if (!fs.existsSync(path.join(dist, "index.html"))) errors.push("dist/index.html is missing.");
for (const name of ["index.html", "styles.css", "app.js", "src/data/optionalMediaStatus.json"]) {
  const file = path.join(dist, name);
  if (!fs.existsSync(file)) errors.push(`Required production file is missing: ${name}`);
  if (fs.existsSync(file)) checkDocumentReferences(file);
}

const htmlPath = path.join(dist, "index.html");
if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, "utf8");
  for (const marker of ["<!DOCTYPE html>", "<html", "</html>", "<head", "</head>", "<body", "</body>"]) {
    if (!html.toLowerCase().includes(marker.toLowerCase())) errors.push(`Required HTML structure is missing: ${marker}`);
  }
}

const appSyntax = require("child_process").spawnSync(process.execPath, ["--check", path.join(dist, "app.js")], {
  cwd: dist,
  encoding: "utf8"
});
if (appSyntax.status !== 0) errors.push(`Browser JavaScript syntax error: ${appSyntax.stderr || appSyntax.stdout}`);

const files = walk(dist);
const relative = files.map((file) => path.relative(dist, file).replace(/\\/g, "/"));
const pilotFiles = relative.filter((file) => file.startsWith("public/media/teoyubeworld/pilot-v1/"));
if (pilotFiles.length !== expectedPilotFiles) {
  warnings.push(
    pilotFiles.length
      ? `Optional TeoyubeWorld media contains ${pilotFiles.length} files; the former approved pilot count was ${expectedPilotFiles}.`
      : "No approved TeoyubeWorld media found. Running frontend without optional media."
  );
}

const runtimeManifests = pilotFiles.filter((file) => /manifest.*\.json$/i.test(file));
let recordCount = 0;
for (const relativeManifest of runtimeManifests) {
  try {
    const value = JSON.parse(fs.readFileSync(path.join(dist, relativeManifest), "utf8"));
    const records = Array.isArray(value) ? value : value.records || value.items || value.media || [];
    recordCount = Math.max(recordCount, Array.isArray(records) ? records.length : 0);
  } catch (error) {
    warnings.push(`Optional runtime manifest is invalid JSON: ${relativeManifest} (${error.message})`);
  }
}
if (pilotFiles.length && recordCount !== expectedPilotRecords) {
  warnings.push(`Optional media manifest contains ${recordCount} records; the former approved pilot count was ${expectedPilotRecords}.`);
}

const ownerNames = /(?:media-review(?:-wizard|-derivatives)?\.(?:html|js)|runtime-acceptance|owner-approval)/i;
for (const file of relative) {
  if (ownerNames.test(file)) errors.push(`Owner-only file is present: ${file}`);
  const absolute = path.join(dist, file);
  if (fs.statSync(absolute).size >= githubHardLimit) errors.push(`File reaches GitHub's 100 MiB hard limit: ${file}`);
  if (!/\.(?:html|css|js|json|txt|md)$/i.test(file) || file === "build-manifest.json") continue;
  const text = fs.readFileSync(absolute, "utf8");
  if (/[A-Za-z]:[\\/](?:Users|Windows|Program Files)[\\/]/i.test(text)) errors.push(`Absolute Windows path in ${file}`);
  if (/[/\\]media-source[/\\]/i.test(text)) errors.push(`Protected source path in ${file}`);
  if (/[/\\]generated[/\\](?:teoyubeworld-media|workspace-rescue)[/\\]/i.test(text)) errors.push(`Generated owner path in ${file}`);
  if (/\/__qa(?:\/|["'`])/i.test(text)) errors.push(`QA endpoint reference in ${file}`);
  if (/\/api\/media-review(?:\/|["'`])/i.test(text)) errors.push(`Owner API reference in ${file}`);
}

const totalBytes = files.reduce((sum, file) => sum + fs.statSync(file).size, 0);
console.log(`Validated build size: ${files.length} files, ${(totalBytes / 1024 / 1024).toFixed(2)} MiB`);
for (const warning of warnings) console.warn(`Warning: ${warning}`);
if (errors.length) {
  console.error(`Vercel build validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Vercel build validation passed${warnings.length ? " with optional-media warnings" : ""}.`);
}
