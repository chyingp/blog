const WebpackShellPlugin = require('webpack-shell-plugin');
// var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
// var WebpackChunkHash = require("webpack-chunk-hash");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './lib/app.js',  // 注意不要写 js/entry.js
  output: {
    path: __dirname,
    filename: 'build/app.js'
  },
	module: {
		rules: [
			{ test: /\.css$/, use: 'css-loader' },
			{
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: 'babel-loader'
	    }
		]
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
		}),

		// new HtmlWebpackPlugin({			
		// 	template: path.resolve(__dirname, 'page/app.ejs'), // Load a custom template (ejs by default see the FAQ for details)
		// })
	],
};