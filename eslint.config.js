import path from 'node:path';
import { fileURLToPath } from 'node:url';

import globals from 'globals';
import { fixupConfigRules } from '@eslint/compat';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';

const f = fileURLToPath(import.meta.url);
const d = path.dirname(f);
const compat = new FlatCompat({
    baseDirectory: d,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...fixupConfigRules(
        compat.extends(
            'eslint:recommended',
            'plugin:react/recommended',
            'plugin:@next/next/recommended',
            'plugin:@typescript-eslint/recommended',
            'prettier'
        )
    ),
    {
        ignores: ['.yarn', 'db', 'dist', 'node_modules'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: tsParser,
            ecmaVersion: 2024,
            sourceType: 'module',
        },

        rules: {
            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            'react/display-name': 0,
            'react/react-in-jsx-scope': 0,
            'react/prop-types': 0,
            semi: ['error', 'always'],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
