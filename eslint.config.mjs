import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "no-unused-vars": "error",
            "prefer-const": "error",
            "no-undef": "error",
            "no-console": "warn",
            "no-unused-expression": "error",
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    },
    {
        ignores: ["**/node_modules/", "**/dist/"]
    }
);
