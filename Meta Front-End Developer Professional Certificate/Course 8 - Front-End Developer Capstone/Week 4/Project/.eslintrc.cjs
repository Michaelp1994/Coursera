// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    ignorePatterns: ["node_modules", "dist", ".eslintrc.cjs"],
    env: {
        es2023: true,
    },
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        EXPERIMENTAL_useProjectService: true,
    },
    overrides: [
        {
            files: ["src/**/*.ts", "src/**/*.tsx"],
            env: {
                browser: true,
                es2023: true,
            },
            extends: [
                "airbnb",
                "airbnb-typescript",
                "airbnb/hooks",
                "plugin:react/jsx-runtime",
                "prettier",
            ],
            rules: {
                "no-console": 0,
                "react/prop-types": 0,
                "react/no-array-index-key": 0,
                "react/jsx-no-bind": 0,
                "react/require-default-props": 0,
                "arrow-body-style": 0,
                "react/jsx-props-no-spreading": 0,
                // LEGIT BELOW
                "@typescript-eslint/no-use-before-define": 0,
                "react/function-component-definition": [
                    2,
                    { namedComponents: "arrow-function" },
                ],
                "import/extensions": [
                    "error",
                    {
                        ignorePatterns: true,
                        pattern: {
                            js: "never",
                            jsx: "never",
                            ts: "never",
                            tsx: "never",
                        },
                    },
                ],
            },
        },
    ],
};
