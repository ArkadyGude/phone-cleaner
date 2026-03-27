module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-new': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'class-methods-use-this': 'off'
  },
};
