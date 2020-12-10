const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    host: "127.0.0.1",
    port: 4200,
    open: true,
    compress: true
    // static: "./src/assets"
  }
});
