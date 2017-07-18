const { resolve } = require('path');

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
};
