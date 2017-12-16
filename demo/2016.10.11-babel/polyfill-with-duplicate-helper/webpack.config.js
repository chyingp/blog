var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'parent.js'),
  output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js'        
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-es2015'],
            plugins: ["babel-plugin-transform-object-rest-spread"],
          }
        }
      }
    ]
  }
};