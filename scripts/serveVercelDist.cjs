const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const port = Number(process.env.PORT || 4200);
const promiseHandler = require("../api/promises/seed");
const youtubeHandler = require("../api/youtube/teoyube");
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp",
  ".mp4": "video/mp4"
};

function adaptResponse(response) {
  response.status = (statusCode) => {
    response.statusCode = statusCode;
    return response;
  };
  response.json = (payload) => {
    response.end(JSON.stringify(payload));
  };
  return response;
}

function sendFile(response, file) {
  response.statusCode = 200;
  response.setHeader("Content-Type", contentTypes[path.extname(file).toLowerCase()] || "application/octet-stream");
  response.setHeader("Cache-Control", "no-store");
  fs.createReadStream(file).pipe(response);
}

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("dist/index.html is missing. Run npm run build:vercel first.");
  process.exit(1);
}

http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  if (url.pathname === "/api/promises/seed") {
    promiseHandler(request, adaptResponse(response));
    return;
  }
  if (url.pathname === "/api/youtube/teoyube") {
    request.query = Object.fromEntries(url.searchParams);
    youtubeHandler(request, adaptResponse(response));
    return;
  }

  const requested = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  const candidate = path.resolve(dist, requested || "index.html");
  if (!candidate.startsWith(`${dist}${path.sep}`) && candidate !== path.join(dist, "index.html")) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    sendFile(response, candidate);
    return;
  }
  sendFile(response, path.join(dist, "index.html"));
}).listen(port, () => {
  console.log(`Teoyube Vercel preview available at http://localhost:${port}`);
});
