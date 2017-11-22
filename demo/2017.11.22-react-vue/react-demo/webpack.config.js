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
	      use: 'babel-loader',
	      // query: {
	      //   presets: ['es2015', 'react', 'stage-2']
	      // }
	    }
		]
	  // loaders: [
	  //   {
	  //     test: /\.js$/,
	  //     exclude: /(node_modules|bower_components)/,
	  //     loader: 'babel-loader',
	  //     query: {
	  //       presets: ['es2015', 'react', 'stage-2']
	  //     }
	  //   }
	  // ]
	}	
};