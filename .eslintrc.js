module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": [".eslintrc.cjs", "vite.config.ts"],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "arrow-body-style": ["error", "as-needed"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/jsx-curly-spacing": ["error", { "when": "always", "children": true}],
        "react/self-closing-comp": ["error", { "component": true, "html": true}],
        "react/jsx-no-useless-fragment": ["error"],
        "react/jsx-props-no-multi-spaces": ["error"],
        "import/order": ["error", {
            "newlines-between": "always",
            "groups":
                [
                    "builtin",
                    "external",
                    "internal",
                    ["parent", "sibling", "index"],
                    "unknown"
                ],
            "pathGroups": [
                {
                    "pattern": '*.css',
                    "group": 'unknown',
                    "patternOptions": { "matchBase": true },
                    "position": 'after'
                },
            ],
            "warnOnUnassignedImports": true,
            "alphabetize": {
                "order": 'asc',
                "caseInsensitive": true
            }
        }
        ]
    }
}
