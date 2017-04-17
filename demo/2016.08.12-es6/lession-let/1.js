// let声明的变量，只在let所在的代码块有效

// 对比1
{
	var a = 1;
}

console.log(a);  // 1

{
	let b = 2;
}

try{
	console.log(b);
}catch(e){
	console.log(e.message);  // b is not defined
}