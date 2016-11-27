const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const utils = require('./utils');

const distDir = path.resolve(__dirname, '../dist');

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    lib: './src/index.js',
  },
  devtool: '#source-map',
  output: {
    path: distDir,
    publicPath: '/',
    filename: 'vue-mdl-datepicker.js',
    library: 'VueMdlDatepicker',
    libraryTarget: 'umd',
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: true,
      extract: true,
    }),
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': "'production'",
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin('vue-mdl-datepicker.css'),
  ],
});

module.exports = webpackConfig;
