module.exports = {
  presets: ["@babel/preset-react", ["@babel/preset-env"]],
  plugins: [
    "@loadable/babel-plugin",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-proposal-object-rest-spread",
    "react-hot-loader/babel",
  ],
  env: {
    test: {
      plugins: ["macros"],
    },
  },
};
