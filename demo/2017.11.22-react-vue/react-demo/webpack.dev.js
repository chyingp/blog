const WebpackShellPlugin = require('webpack-shell-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/lib/app.js',  // 注意不要写 js/entry.js
  output: {
    path: __dirname,
    filename: 'build/app.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: 'babel-loader'
	    }
		]
	},
	resolve: {
		modules: [path.resolve(__dirname, "src/modules"), "node_modules"]
	},
	plugins: [		

		new WebpackShellPlugin({
			onBuildStart: ['echo "Webpack Start"'], 
			// onBuildEnd:[
			// 	'echo "Webpack End"',
			// 	'gulp'
      // ],
      onBuildExit: [
        'echo "Webpack Build Exit"',
        'gulp'
      ]
		})
	]
};