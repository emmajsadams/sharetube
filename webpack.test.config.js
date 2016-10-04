'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var TapWebpackPlugin = require('tap-webpack-plugin')
const config = require('./webpack.dev.config');

config.entry = './src/test-index.js';
config.node = { fs: "empty" };
config.eslint = { emitError: true };
config.plugins = [new TapWebpackPlugin({ reporter: 'tap-spec' })];

module.exports = config;