module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "rules":{
        "@typescript-eslint/explicit-module-boundary-types":"off",
        "@typescript-eslint/no-empty-function":"off"
    }

}