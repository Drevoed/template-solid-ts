// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';

export default tseslint.config(
    {
        files: ['**/*.tsx'],
        plugins: {
            'simple-import-sort': simpleImportSort,
            promise,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
    prettier,
    eslint.configs.recommended,
    ...tseslint.configs.recommended
);
