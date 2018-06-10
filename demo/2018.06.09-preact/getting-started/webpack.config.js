const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    // path: path.resolve(__dirname, 'dist')
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        }
      }
    ]
  },
  resolve: {
    alias: {
      preact: path.resolve(__dirname, 'node_modules/preact/src/preact.js'),
    }
  },
  devtool: "source-map"
};