var webpack = require('webpack');

module.exports = {
	entry: './js/entry.js',  // 注意不要写 js/entry.js
	output: {
		path: __dirname,
		filename: 'bundle/entry.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			mangle: false
		})
	]
};
