import js from "@eslint/js";
import pluginRouter from "@tanstack/eslint-plugin-router";
import prettierConfig from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

const config = defineConfig(
  globalIgnores([".output/", "dist/", "src/routeTree.gen.ts"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  pluginRouter.configs["flat/recommended"],
  perfectionist.configs["recommended-alphabetical"],
  prettierConfig,
);

export default config;
