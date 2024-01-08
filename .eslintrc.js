module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:mobx/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['**/styled.ts'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: [
    'react',
    'mobx',
    'react-hooks',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'componentWrapperFunctions': ['observer']
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/consistent-type-imports': [ 'error',{ 'prefer': 'type-imports', 'fixStyle': 'separate-type-imports'}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'mobx/exhaustive-make-observable': 'warn',
    'mobx/unconditional-make-observable': 'error',
    'mobx/missing-make-observable': 'error',
    'mobx/missing-observer': 'off',
    'mobx/no-anonymous-observer': 'off',
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', ['index', 'sibling', 'parent', 'object']],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'pathGroups': [{ 'pattern': '@/**', 'group': 'external', 'position': 'after' }],
      },
    ]
  }
}
