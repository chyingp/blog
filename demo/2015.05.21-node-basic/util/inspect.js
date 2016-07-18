const util = require('util');

console.log(util.inspect(util, {
	showHidden: true,
	depth: null,
	colors: true
}));