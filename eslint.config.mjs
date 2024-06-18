import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: ["src/**/*.spec.ts", "server/**/*", "scripts/**/*", "dist/**/*", "e2e/build/**/*"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": ["error"],
      "no-undef": ["off"],
      "no-unused-vars": ["off"],
      "@typescript-eslint/no-unused-vars": ["off"],
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/no-unnecessary-type-constraint": ["off"],
    },
  },
];
