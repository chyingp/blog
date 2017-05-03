var Promise = require('native-promise-only');

var p1 = new Promise(function(resolve, reject){
	resolve(1);
});

p1.then(function(value){
	return value + 1;
});

p1.then(function(value){
	console.log(2);
});