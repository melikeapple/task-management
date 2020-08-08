const { resolve } = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const staticPath = resolve("dist");

module.exports = {
  entry: {
    main: resolve(__dirname, "../", "src", "index.js"),
    styles: resolve(
      __dirname,
      "../",
      "src",
      "_assets",
      "styles",
      "_styles.scss"
    ),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        include: /src/,
      },
      {
        test: /\.(js|jsx)?$/,
        use: "react-hot-loader/webpack",
        include: /(node_modules)/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
              reloadAll: true,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CaseSensitivePathsPlugin(),
    new Dotenv({
      path: resolve("env", `.env.${process.env.NODE_ENV}`),
      safe: false,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.IS_BROWSER": JSON.stringify(true),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "./public/", to: `${staticPath}` }],
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../", "public", "index.html"),
    }),
  ],
};
