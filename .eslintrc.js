module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-new': 'off',
  },
};
