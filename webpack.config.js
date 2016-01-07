var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    publicPath: './',
    path: path.join(__dirname, '/build/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus',
      },
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
  ],
};