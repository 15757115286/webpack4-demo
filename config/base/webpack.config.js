const path = require("path");
const config = require("./merged.config");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
function resolve(...paths) {
  return path.resolve(config.basePath, ...paths);
}

module.exports = {
  entry: {
    main: resolve("src/main.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve("dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: config.basePath
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve(config.template)
    })
  ],
  resolve:{
    alias:{
      '@':resolve('src'),
      'assets':resolve('src/assets'),
      'app':resolve('src/app')
    },
    extensions:['.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
