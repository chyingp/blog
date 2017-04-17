var tmp = 123;

// 暂时性死区：当代码块中用let声明了变量，那么这个变量就跟这个块级作用域绑定
// 所以，在let声明前使用tmp，就会报错（哪怕其他地方已经声明了tmp变量）
if(true) {
	console.log(tmp);  // ReferenceError: tmp is not defined
	let tmp;
}