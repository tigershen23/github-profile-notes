var webpack = require('webpack');
var rewirePlugin = require('rewire-webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: false,
    frameworks: [ 'mocha' ],
    files: [
      'test.webpack.js'
    ],
    preprocessors: {
      'test.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
        ]
      },
      plugins: [
        new rewirePlugin()
      ],
    },
    webpackServer: {
      noInfo: true
    }
  });
};
