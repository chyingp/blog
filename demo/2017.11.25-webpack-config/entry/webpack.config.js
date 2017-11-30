const path = require('path');

module.exports = {
  entry: { app: './app.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
    // filename: '[name].[hash].js'
  }
};