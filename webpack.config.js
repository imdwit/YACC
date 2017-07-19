const { resolve } = require('path');
const webpack = require('webpack');
module.exports = {
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
    }),
  ],
};
