import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number.parseInt(process.env.PORT || "8787", 10);
const host = "127.0.0.1";

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

function resolvePath(urlPath) {
  const requestPath = decodeURIComponent(urlPath === "/" ? "/index.html" : urlPath);
  const filePath = path.normalize(path.join(root, requestPath));
  return filePath.startsWith(root) ? filePath : null;
}

http
  .createServer((request, response) => {
    const url = new URL(request.url, `http://${host}:${port}`);
    const filePath = resolvePath(url.pathname);

    if (!filePath) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      });
      response.end(data);
    });
  })
  .listen(port, host, () => {
    console.log(`KiddoCare prototype running at http://${host}:${port}`);
  });
