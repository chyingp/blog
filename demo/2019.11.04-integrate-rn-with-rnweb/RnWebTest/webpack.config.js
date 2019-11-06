const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'index.web.js',
		path: path.resolve(__dirname, 'build-web'),
	},
	mode: 'development',
    module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					// options: {
					// 	presets: ['@babel/preset-env']
					// }
				}
			}			
		]
	},

  	resolve: {
    	alias: {
    		'react-native$': 'react-native-web'
    	}
  	}
}