export default [
  {
    files: ["src/**/*.js"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      eqeqeq: "error",
      "no-console": "warn",
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
  },
];
