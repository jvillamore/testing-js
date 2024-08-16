module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
