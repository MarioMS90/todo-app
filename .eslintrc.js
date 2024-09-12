/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'eslint-config-prettier', 'next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', 'next.config.mjs'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};