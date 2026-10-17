import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: { "~": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  define: {
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
    __APP_ENV__: JSON.stringify("local"),
    __BASE_URL__: JSON.stringify("https://mikeverderese.com"),
  },
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["./src/test/setup.ts"],
  },
});
