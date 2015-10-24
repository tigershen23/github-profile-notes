var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: false,
    frameworks: [ 'jasmine' ],
    files: [
      "./app/**/*-test.js"
    ],
    preprocessors: {
      "./app/**/*-test.js": [ 'webpack' ]
    },
    reporters: [ 'dots' ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
        ]
      },
    },
    plugins: [
      require("karma-webpack"),
      require("karma-jasmine"),
      require("karma-chrome-launcher")
    ],
    webpackServer: {
      noInfo: true
    }
  });
};
