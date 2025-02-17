import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import eslintPrettierConfig from 'eslint-config-prettier'

export default tseslint.config(
    {
    },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            eslintPrettierConfig,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'prettier': prettier,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
            '@typescript-eslint/no-unused-vars': 'on',
            '@typescript-eslint/no-empty-function': 'on',
            '@typescript-eslint/no-var-requires': 'on',
            '@typescript-eslint/no-misused-promises': 'on',
            '@typescript-eslint/no-unsafe-argument': 'on',
            '@typescript-eslint/no-unsafe-assignment': 'on',
            '@typescript-eslint/no-unsafe-return': 'on',
            'react-hooks/rules-of-hooks': 'on',
            'react/react-in-jsx-scope': 'on',
            'prettier/prettier': 'error',
            'sort-imports': [
                'error',
                {
                    ignoreCase: true,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false,
                    allowSeparateGroups: true,
                },
            ],
            'import/named': 'on',
            'import/order': [
                'error',
                {
                    'newlines-between': 'always',
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        ['parent', 'index', 'siblilng'],
                        'type',
                        'object',
                        'unkown',
                    ],
                    pathGroups: [
                        {
                            pattern: 'react*',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: 'react*/**',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: 'highcharts/highstock',
                            group: 'external',
                            position : 'before',
                        },
                        {
                            pattern: 'assets/**',
                            group: 'unknown',
                            position: 'before',
                        },
                        {
                            pattern: '#assets/**',
                            group : 'unknown',
                            position: 'before'
                        },
                        {
                            pattern: '#/*/**',
                            group: 'type',
                            position : 'after',
                        },
                        {
                            pattern: '#*/**',
                            group: 'type',
                            position: 'after',
                        },
                    ],
                    pathGroupExcludeImportTypes : [],
                    alphabetize:{
                        order: 'asc',
                        caseInsensitive : true,
                    },
                    warnOnUnassignedImports : true,
                },
            ]
        },
        settings:{
          'import/external-module-folders':['.yarn'],
          'import/parsers' : {
              '@typescript-eslint/parser' : ['.ts','.tsx'],
          },
            'import/resolver':{
              typescript : {},
            }
        },
        linterOptions:{
          reportUnusedDisableDirectives: true,
        },
        ignorePatterns:[
            '*.config.js',
            '*.config.mjs',
            '*.setup.js',
            'config/**/*',
            '*/external/**/*',
            'dist',
            './.eslintrc.cjs',
        ],
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
        },
    },
)
