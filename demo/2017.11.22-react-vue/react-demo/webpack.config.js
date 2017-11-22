const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
	entry: './lib/app.js',  // 注意不要写 js/entry.js
	output: {
		path: __dirname,
		filename: 'bundle/app.js'
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
			onBuildEnd:[
				'echo "Webpack End"',
				'gulp'
			]
		})
  ],
};