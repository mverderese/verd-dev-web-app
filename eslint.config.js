import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["build", ".react-router", "node_modules", "playwright-report", "test-results", ".local"] },
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: { allowDefaultProject: ["*.js", "scripts/*.mjs"] },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.{js,mjs}"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: ["**/*.tsx"],
    plugins: { "react-hooks": reactHooks },
    extends: [jsxA11y.flatConfigs.recommended],
    rules: reactHooks.configs.recommended.rules,
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
    },
  },
  prettier,
);
