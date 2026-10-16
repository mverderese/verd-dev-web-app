import type { Config } from "@react-router/dev/config";
import { caseStudies } from "./src/content/caseStudies";

export default {
  appDirectory: "src",
  // Fully static for now: every route is prerendered to HTML at build time.
  // Flip `ssr` to true (and add the Vercel preset) when server routes are needed.
  ssr: false,
  prerender: ({ getStaticPaths }) => [...getStaticPaths(), ...caseStudies.map(({ slug }) => `/work/${slug}`)],
} satisfies Config;
