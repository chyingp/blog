const WebpackShellPlugin = require('webpack-shell-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		app: './src-babel-duplicate/app.js',		
	},	
  output: {
    filename: '[name].js',
		chunkFilename: '[name].js',		
		path: path.resolve(__dirname, 'build'),
		publicPath: '/oc/public/kh-m/'
	},
	// devtool: 'inline-source-map',
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

		new ManifestPlugin({
			publicPath: '/oc/public/kh-m/'
		}),		

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor', // Specify the common bundle's name.
			// minChunks: function (module) {
			// 	// this assumes your vendor imports exist in the node_modules directory
			// 	return module.context && module.context.indexOf('node_modules') !== -1;
			// }
		}),	

		// new WebpackShellPlugin({
		// 	onBuildStart: ['echo "Webpack Start"'], 
    //   onBuildExit: [
    //     'echo "Webpack Build Exit"',
    //     'gulp'
    //   ]
		// })
	]
};