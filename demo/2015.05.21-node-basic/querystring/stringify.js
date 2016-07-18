var querystring = require('querystring');

var obj1 = {
	"nick": "casper",
	"age": "24"
};
var str1 = querystring.stringify(obj1);
console.log(str1);

var obj2 = {
	"name": "chyingp",
	"country": "cn"
};
var str2 = querystring.stringify(obj2, '|', '-');
console.log(str2);