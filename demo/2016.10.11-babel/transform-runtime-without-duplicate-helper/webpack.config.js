var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'parent2.js'),
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
            presets: ['babel-preset-env'],
            plugins: ["transform-runtime"],
          }
        }
      }
    ]
  }
};