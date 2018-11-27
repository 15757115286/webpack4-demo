const path = require("path");
const config = require("./merged.config");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const helper = require("../utils/scan");
function resolve(...paths) {
  return path.resolve(config.basePath, ...paths);
}
const { htmlEntry, jsEntry } = config.multiples;
const pageGraph = helper.scan(htmlEntry);
// _noop_包用于热更新
const entry = {
  _noop_: resolve(jsEntry,'noop.js') 
};
const plugins = [
  new CleanWebpackPlugin(["dist"], {
    root: config.basePath
  })
];
const jsGraph = helper.scan(jsEntry);
for(let key in jsGraph){
  let { fileName, root } = jsGraph[key];
  entry[key] = path.resolve(root,fileName);
}
for(let key in pageGraph){
  let { fileName, root } = pageGraph[key];
  const options = {
    template:path.resolve(root,fileName)
  }
  if(jsGraph[key]){
    options['chunks'] = [key];
  }else{
    options['chunks'] = ['_noop_'];
  }

  let paths = key.split('.');
  paths.pop();
  options['filename'] = resolve('dist',...paths,fileName);
  plugins.push(new HtmlWebpackPlugin(options))
}

module.exports = {
  entry,
  output: {
    filename: "[name].bundle.js",
    path: resolve("dist")
  },
  plugins,
  resolve: {
    alias: {
      "@": resolve("src"),
      assets: resolve("src/assets"),
      app: resolve("src/app")
    },
    extensions: [".js"]
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