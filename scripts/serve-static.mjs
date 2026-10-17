// Serves the prerendered build the way Vercel does: exact file, then
// `<path>/index.html`, then the root 404.html with a 404 status.
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = join(import.meta.dirname, "..", "build", "client");
const port = Number(process.env.PORT ?? 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".data": "text/x-script",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ico": "image/x-icon",
};

async function resolveFile(pathname) {
  const safe = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  for (const candidate of [join(root, safe), join(root, safe, "index.html")]) {
    const info = await stat(candidate).catch(() => undefined);
    if (info?.isFile()) return { file: candidate, status: 200 };
  }
  return { file: join(root, "404.html"), status: 404 };
}

createServer(async (req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url ?? "/", "http://localhost").pathname);
  } catch {
    res.writeHead(400).end("Bad request");
    return;
  }
  const { file, status } = await resolveFile(pathname);
  createReadStream(file)
    .on("open", () => {
      res.writeHead(status, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
    })
    .on("error", () => {
      if (!res.headersSent) res.writeHead(500);
      res.end();
    })
    .pipe(res);
}).listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
