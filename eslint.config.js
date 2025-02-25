import js from '@eslint/js';
import cypress from 'eslint-plugin-cypress/flat';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

const tsConfig = {
  files: ['**/*.ts'],
  languageOptions: {
    parser: tsparser,
    parserOptions: { project: './tsconfig.json' },
  },
  plugins: { '@typescript-eslint': tseslint },
  rules: {
    ...tseslint.configs.recommended.rules,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'warn',
    'eol-last': ['error', 'always'],
  },
};

const cypressTestsConfig = {
  files: ['**/*.spec.ts'],
  plugins: { '@typescript-eslint': tseslint },
  rules: {
    'cypress/no-unnecessary-waiting': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};

export default [js.configs.recommended, tsConfig, cypress.configs.recommended, cypressTestsConfig];
