// enumerable
var obj = {
	nick: 'chyingp'
};

// enumerable为true，在for...in循环中可出现，false则不出现
// 默认是false
Object.defineProperty(obj, 'school', {
	enumerable: true,
	value: 'sysu'
});

Object.defineProperty(obj, 'gender', {
	enumerable: false,
	value: 'man'
});

Object.defineProperty(obj, 'country', {
	value: 'China'
});

for(var key in obj) {
	console.log(`key: %s, value: %s`, key, obj[key]);
}

// 输出：
// key: nick, value: chyingp
// key: school, value: sysu