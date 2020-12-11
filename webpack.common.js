const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const devMode = process.env.NODE_ENV == "dev";

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Traveler",
      template: "./src/index.html",
      filename: "index.html",
      favicon: "./src/favicon.ico",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/" // 生产环境需要更改publicPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: [path.resolve(__dirname, "src")],
        loader: "vue-loader"
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader"
      },
      {
        test: /\.(sass|scss|css)$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: "file-loader"
      }
    ]
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "async",
      minChunks: 1
    }
  }
};
