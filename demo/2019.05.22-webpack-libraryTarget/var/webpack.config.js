const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		entry: path.resolve('./entry.js')
	},
	output: {
		path: __dirname,
		filename: 'bundle.js',
		libraryTarget: 'var',
		library: 'MyBundle'
	}
};