module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-bind': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.tsx']}],
    'no-unused-vars': 'off',
    'import/order': ['warn', { 'newlines-between': 'always' }],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'typescript-eslint/no-empty-interface': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 0,
    '@typescript-eslint/no-shadow': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-console': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    "@typescript-eslint/no-var-requires": "off",
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': [
      2,
      {namedComponents: 'arrow-function'},
    ],
    'import/extensions': 'off',
    'arrow-body-style': 1,
    'no-nested-ternary': 0,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};