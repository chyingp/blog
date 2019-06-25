const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: ['node_modules'],
        use: [{ loader: 'babel-loader' }]
      }
    ]
  }
};