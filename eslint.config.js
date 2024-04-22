const globals = require('globals');
const recommended = require('@eslint/js/src/configs/eslint-recommended.js');

module.exports = [
  recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      'linebreak-style': 'off',
      'no-console': 'off',
      'no-else-return': 'error',
      'require-await': 'error',
      'no-trailing-spaces': 'error',
      indent: [
        'error',
        2,
        {
          SwitchCase: 2,
        },
      ],
      quotes: [
        'error',
        'single',
      ],
      semi: [
        'error',
        'always',
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'comma-dangle': [
        'error',
        'always-multiline',
      ],
      'quote-props': [
        'error',
        'as-needed',
      ],
    },
  },
];
