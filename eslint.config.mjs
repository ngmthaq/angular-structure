import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ["src/app/**.spec.ts", "src/scripts/**.script.js"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
