import { fileURLToPath } from "node:url";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
  // Fixed at build time so prerendered HTML and the hydrated client always agree.
  define: { __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()) },
  resolve: {
    alias: { "~": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
