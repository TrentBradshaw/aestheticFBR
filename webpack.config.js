const path = require("path");
const webpack = require('webpack');

module.exports = {
    watch: true,
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
    }, 
    
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
    devServer: {
        hot: true,
        historyApiFallback: true
    },
};