const path = require('path');

module.exports = {
	entry: './index.web.js',
	output: {
		filename: 'index.web.js',
		path: path.resolve(__dirname, 'build'),
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
	},

	devServer: {
		contentBase: path.join(__dirname, '.'),
		// compress: true,
		port: 9000
	}
}