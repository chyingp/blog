// 不报错
function foo () {
	var a = 1;
	var b = 2;
}

// 报错：SyntaxError: Identifier 'a' has already been declared
function bar () {
	let a = 1;
	let a = 2;
};