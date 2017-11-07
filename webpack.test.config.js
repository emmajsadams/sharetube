'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var TapWebpackPlugin = require('tap-webpack-plugin')
const config = require('./webpack.dev.config');

config.entry = './src/test-index';
config.node = { fs: "empty" };
config.plugins = [new TapWebpackPlugin({ reporter: 'tap-spec' })];

module.exports = config;
