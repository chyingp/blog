var nick = 'chyingp';
var country = 'China';

var str = nick + ' live in ' + country;

var logger = function(msg){
	console.log(msg); // 这里
	console.log('这行会跳过'); // 跳过这行
};

logger(str);  // 假设运行到这里，想要进入logger方法

console.log(str);