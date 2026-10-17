import { copyFile } from "node:fs/promises";
import { join } from "node:path";
import type { Config } from "@react-router/dev/config";
import { caseStudies } from "./src/content/caseStudies";

export default {
  appDirectory: "src",
  // Fully static for now: every route is prerendered to HTML at build time.
  // Flip `ssr` to true (and add the Vercel preset) when server routes are needed.
  ssr: false,
  prerender: ({ getStaticPaths }) => [...getStaticPaths(), ...caseStudies.map(({ slug }) => `/work/${slug}`)],
  // Vercel serves a root 404.html, with a 404 status, for any path with no file.
  // The SPA fallback hydrates into the matching route, which is the not-found page.
  async buildEnd({ viteConfig }) {
    const client = viteConfig.build.outDir;
    await copyFile(join(client, "__spa-fallback.html"), join(client, "404.html"));
  },
} satisfies Config;
