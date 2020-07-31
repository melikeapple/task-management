const { merge } = require("webpack-merge");
const common = require("./webpack/webpack.common");

/* eslint-disable global-require,import/no-dynamic-require */
const envConfig = require(`./webpack/webpack.${process.env.NODE_ENV}.js`);
module.exports = merge(common, envConfig);
