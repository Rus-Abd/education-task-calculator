const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'react-app'],

  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-console': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/no-unresolved': 'off',
  },
};
