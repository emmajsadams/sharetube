'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(woff|png|jpg|gif|svg|ttf|eot|woff2)$/, loader: 'url-loader' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};