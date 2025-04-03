import { nextJsConfig } from "@workspace/eslint-config/next-js"

/** @type {import("eslint").Linter.Config} */
export default {
  ...nextJsConfig,
  rules: {
    ...nextJsConfig.rules,
    "@typescript-eslint/no-explicit-any": "off", // Disable the rule to allow 'any' type
  },
}