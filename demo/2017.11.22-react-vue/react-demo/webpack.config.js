const WebpackShellPlugin = require('webpack-shell-plugin');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './lib/app.js',  // 注意不要写 js/entry.js
	// output: {
	// 	path: __dirname,
	// 	filename: 'bundle/app.js'
	// },
	output: {
		path: path.resolve(__dirname, 'build'),
		// publicPath: 'build',
		filename: '[name].js'        
	},
	stats: {
			hash: true
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
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module) {
					// this assumes your vendor imports exist in the node_modules directory
					return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),

		new webpack.HashedModuleIdsPlugin(),
		new WebpackChunkHash(),

		new ChunkManifestPlugin({
				filename: "chunk-manifest.json",
				manifestVariable: "webpackManifest"
		}),

		new WebpackShellPlugin({
			onBuildStart: ['echo "Webpack Start"'], 
			onBuildEnd:[
				'echo "Webpack End"',
				'gulp'
			]
		}),

		new HtmlWebpackPlugin({			
			template: path.resolve(__dirname, 'page/app.ejs'), // Load a custom template (ejs by default see the FAQ for details)
		})  		
	],
};