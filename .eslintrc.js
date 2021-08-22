module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // https://github.com/import-js/eslint-plugin-import/blob/v2.24.1/docs/rules/extensions.md
    'import/extensions': ['off'],
    'no-alert': 'off',
  },
  ignorePatterns: ['dist/', 'node_modules/', 'webpack.config.js', 'webpack.production.config.js', 'cypress/'],
  // https://github.com/import-js/eslint-plugin-import#resolvers
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      },
    },
  },
};
