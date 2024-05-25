import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    ignores: ["src/app/**.spec.ts", "src/scripts/**.script.js"],
    rules: {
      "no-undef": ["error"],
      "no-unused-vars": ["error"],
      "prettier/prettier": ["error"],
    },
  },
];