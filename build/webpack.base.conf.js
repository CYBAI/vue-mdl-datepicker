const path = require('path');

const projectRoot = path.resolve(__dirname, '../');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')],
  },
  eslint: {
    formatter: require('eslint-friendly-formatter'),
  },
  module: {
    preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/,
    }, {
      test: /\.js$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/,
    }],
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/,
    }],
  },
};
