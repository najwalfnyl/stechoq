/* eslint-env node */
// eslint-disable-next-line import/no-extraneous-dependencies
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'airbnb-base',
    '@vue/eslint-config-prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },
};
