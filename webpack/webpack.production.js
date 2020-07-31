const { resolve } = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

module.exports = {
    mode: "production",
    entry: resolve("src", "index.js"),
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: resolve(__dirname, "../", "dist"),
        chunkFilename: "[name].[contenthash].[id].bundle.js",
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new ManifestPlugin(),
        new RobotstxtPlugin()
    ],
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        minimize: true,
        splitChunks: {
            minSize: 100000,
            maxSize: 1500000,
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    }
};
