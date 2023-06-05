/** @type {import('@types/eslint').BaseConfig} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'indent': [ 'error', 2 ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'no-console': 'warn',

    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'warn',

    '@typescript-eslint/ban-ts-comment': 'warn',
  },
}
