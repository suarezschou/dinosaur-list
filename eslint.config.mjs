export default {
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "eqeqeq": ["error", "always"],
    "semi": ["error", "always"],
  },
};