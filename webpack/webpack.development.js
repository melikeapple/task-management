const { resolve, join } = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "../", "dist"),
    chunkFilename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    contentBase: join(__dirname, "../", "dist"),
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
