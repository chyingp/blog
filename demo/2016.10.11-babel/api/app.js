var fs = require('fs');
var babel = require("babel-core");

var code = fs.readFileSync('./es6.js', {encoding: 'utf8'});
var result = babel.transform(code, {
	presets: ['babel-preset-es2015']
});

console.log(result.code);