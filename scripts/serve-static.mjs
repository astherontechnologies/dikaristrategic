// Preview the exported site locally. Cloudflare Pages serves out/ directly.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

const root = resolve("out");
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : fallback;
};
const port = Number(option("--port", process.env.PORT || "3000"));
const hostname = option("--hostname", "127.0.0.1");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".otf": "font/otf",
};

try {
  await stat(resolve(root, "index.html"));
} catch {
  console.error(
    "Folder out belum tersedia. Jalankan npm run build atau bun run build terlebih dahulu.",
  );
  process.exit(1);
}

createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
  } catch {
    response.writeHead(400).end();
    return;
  }
  const target = resolve(root, "." + pathname);
  if (target !== root && !target.startsWith(root + sep)) {
    response.writeHead(403).end();
    return;
  }
  for (const file of [
    target,
    target + ".html",
    resolve(target, "index.html"),
  ]) {
    try {
      if (!(await stat(file)).isFile()) continue;
      const data = await readFile(file);
      response.writeHead(200, {
        "Content-Type": mime[extname(file)] || "application/octet-stream",
        "Content-Length": data.length,
      });
      response.end(request.method === "HEAD" ? undefined : data);
      return;
    } catch {
      // Try the next static route form, then the exported 404 page.
    }
  }
  try {
    const data = await readFile(resolve(root, "404.html"));
    response.writeHead(404, { "Content-Type": mime[".html"] });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(404).end();
  }
}).listen(port, hostname, () => {
  console.log(`Static preview: http://${hostname}:${port}`);
});
