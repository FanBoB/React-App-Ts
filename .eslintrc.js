export default {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  'p arserOptions': {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'multiline-ternary': 'off',
    'react/prop-types': 'off',
    'space-before-function-paren': ['error', { named: 'never' }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error'
  }
}
