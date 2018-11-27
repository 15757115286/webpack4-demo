const path = require("path");
const config = require("../base/merged.config");
const baseConfig = require("../base/webpack.config");

module.exports = Object.assign({}, baseConfig, {
  mode: "development",
  devtool: "inline-cheap-source-map",
  devServer: config.devServer
});
