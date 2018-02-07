var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		app: path.resolve('./app.js'),
	},	
  output: {
    filename: '[name].js',
		// chunkFilename: '[name].js',		
		path: path.resolve(__dirname, 'build')
	},
	// devtool: 'inline-source-map',
	module: {
		rules: [			
			{
		    	test: /\.js$/,
		    	exclude: /(node_modules|bower_components)/,
		    	use: 'babel-loader'
		    }
		]
	}
};