const path = require('path');
const plugin = require('./plugins/filelistPlugin');

module.exports = {
  entry: { app: './src/app.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
    // filename: '[name].[hash].js'
  },
  plugins: [
    new plugin()
  ]
};