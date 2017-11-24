const WebpackShellPlugin = require('webpack-shell-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var webpack = require('webpack');
var path = require('path');
var conf = require('./release.conf');
var publicPath = conf.publicPath;

module.exports = {
	entry: {
		app: path.join(conf.src, 'lib/app.js'),
	},	
  output: {
    filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',		
		path: path.resolve(__dirname, conf.tmp),
		publicPath: publicPath
	},
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
		modules: [path.resolve(conf.src, "modules"), "node_modules"]
	},
	plugins: [

		new ManifestPlugin({
			publicPath: publicPath
		}),		

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor', // Specify the common bundle's name.
			minChunks: function (module) {
				// this assumes your vendor imports exist in the node_modules directory
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),	

		new WebpackShellPlugin({
			onBuildStart: ['echo "Webpack Start"'], 
			// onBuildEnd:[
			// 	'echo "Webpack End"',
			// 	'gulp'
      // ],
      onBuildExit: [
        'echo "Webpack Build Exit"',
        'gulp prod'
      ]
		})
	]
};