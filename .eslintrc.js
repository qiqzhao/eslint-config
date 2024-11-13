module.exports = {
  env: {
    browser: true, es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "eqeqeq": ["error", "always"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", {"code": 80}],
    "no-console": "off",
    "no-unused-vars": "warn",
    "prefer-const": "error",
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
      },
    ],
  },
};
