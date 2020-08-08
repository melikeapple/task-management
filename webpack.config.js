const {merge} = require("webpack-merge");
const common = require("./webpack/webpack.common");

// const envConfig = require(`./webpack/webpack.${process.env.NODE_ENV}.js`);
const envConfig = require(`./webpack/webpack.development.js`);
module.exports = merge(common, envConfig);
