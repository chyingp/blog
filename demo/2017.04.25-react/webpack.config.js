var path = require('path');

module.exports = {
  entry: './containers/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};