module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", "tab"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error"],
    "react/prop-types": ["error", "never"],
  },
};
