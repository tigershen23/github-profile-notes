var path = require("path")

module.exports = {
  entry: "./app/App.js",
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader'],
      }
    ]
  },
};
