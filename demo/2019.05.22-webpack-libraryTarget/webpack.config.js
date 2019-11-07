module.exports = {
	mode: 'development',
	entry: {
		entry: './entry.js',
		banner: './banner.js',
	},
	output: {
		// path: __dirname,
		filename: '[name].js',
		libraryTarget: 'umd',
		library: '[name]'
	},
	resolve: {
		// alias: {
		// 	banner: 'http://127.0.0.1:8000/dist/banner.js'
		// }
		// alias: {
		// 	banner: './banner'
		// }
	}
};