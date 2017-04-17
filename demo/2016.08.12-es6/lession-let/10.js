// 块级作用域

(function () {
	var a = 1;
	console.log(a);
})();

{
	let a = 2;
	console.log(a);
}