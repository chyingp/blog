const WebpackShellPlugin = require('webpack-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		app: './src-sp-imp/app.js',
		// login: './src-sp/login.js',
		// reg: './src-sp/reg.js'
	},  // 注意不要写 js/entry.js
  output: {
    // path: __dirname,
		// filename: 'build/app.js'
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/oc/public/kh-m/'
	},
	devtool: 'inline-source-map',
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
		modules: [path.resolve(__dirname, "src-sp/modules"), "node_modules"]
	},
	plugins: [		

		// new HTMLWebpackPlugin({
    //   title: 'Code Splitting'
		// }),
		
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor' // Specify the common bundle's name.
		}),	

		new WebpackShellPlugin({
			onBuildStart: ['echo "Webpack Start"'], 
			// onBuildEnd:[
			// 	'echo "Webpack End"',
			// 	'gulp'
      // ],
      onBuildExit: [
        'echo "Webpack Build Exit"',
        'gulp'
      ]
		})
	]
};