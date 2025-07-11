import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Required to emulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create compat instance with required base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ✅ Extend from standard ESLint and Next.js config
const eslintConfig = [
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "next/core-web-vitals"
  ),
];

export default eslintConfig;
