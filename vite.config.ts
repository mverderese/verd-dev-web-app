import { fileURLToPath } from "node:url";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

/** Production deploys are prod, the develop branch is dev, other Vercel branches are previews, anything else is local. */
const appEnv = () => {
  if (process.env.VERCEL_ENV === "production") return "prod";
  if (process.env.VERCEL_ENV === "preview") return process.env.VERCEL_GIT_COMMIT_REF === "develop" ? "dev" : "preview";
  return "local";
};

/** Prod is the real domain, Vercel deploys use their own URL, anything else is the local dev server. */
const baseUrl = () => {
  if (appEnv() === "prod") return "https://mikeverderese.com";
  const host = process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL;
  return host ? `https://${host}` : "http://localhost:5173";
};

export default defineConfig({
  plugins: [reactRouter()],
  // Fixed at build time so prerendered HTML and the hydrated client always agree.
  define: {
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
    __APP_ENV__: JSON.stringify(appEnv()),
    __BASE_URL__: JSON.stringify(baseUrl()),
  },
  resolve: {
    alias: { "~": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
