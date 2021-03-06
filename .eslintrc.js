module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': 0,
    eqeqeq: 0,
    'no-underscore-dangle': 0,
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true
      }
    ]
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ],

  extends: ['plugin:vue/essential', '@vue/airbnb', 'eslint:recommended', '@vue/prettier']
};
