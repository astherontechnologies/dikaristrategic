// Serve the untouched HTML only during parity tests; this is not shipped by Next.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

const root = process.cwd();
const mime = {
  ".html": "text/html; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    if (pathname !== "/" && !pathname.startsWith("/assets/")) {
      response.writeHead(404).end();
      return;
    }
    const file = resolve(
      root,
      pathname === "/" ? "index.html" : "." + pathname,
    );
    if (!file.startsWith(root + sep)) {
      response.writeHead(403).end();
      return;
    }
    const data = await readFile(file);
    response
      .writeHead(200, {
        "Content-Type": mime[extname(file)] || "application/octet-stream",
      })
      .end(data);
  } catch {
    response.writeHead(404).end();
  }
}).listen(3101, "127.0.0.1");
