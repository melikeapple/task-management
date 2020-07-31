const {resolve} = require("path");
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
        /*style: resolve(
            __dirname,
            "../",
            "src",
            "core",
            "_assets",
            "sass",
            "style.scss"
        )*/
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: "babel-loader",
                exclude: /(node_modules)/,
                include: /src/
            },
            {
                test: /\.(js|jsx)?$/,
                use: "react-hot-loader/webpack",
                include: /(node_modules)/
            },
            /*{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === "development",
                            reloadAll: true
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },*/
            /*{
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/zs-icons"
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }*/
        ]
    },
    resolve: {
        modules: ["src", "node_modules"],
        extensions: ["*", ".js", ".css", ".scss"]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CaseSensitivePathsPlugin(),
        new Dotenv({
            path: resolve("env", `.env.${process.env.NODE_ENV}`),
            safe: false
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            "process.env.IS_BROWSER": JSON.stringify(true)
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyPlugin({
            patterns: [{ from: "./public/", to: `${staticPath}` }]
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "../", "public", "index.html")
        }),
        /*new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })*/
    ]
}
