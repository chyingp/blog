"use strict"
{
	let a = 0;
	var b = 0;
}

console.log(typeof a);
console.log(typeof b);

for(let i = 0; i < 10; i++){
	// nothing
}
console.log(typeof i);

// 不存在变量提升
function useLetVari(){
	// undefined，而不是 ReferenceError？
	console.log(aa);
	let aa = 0;
}

function useVarVari(){
	console.log(aa);
	var aa = 0;
}

useLetVari();
useVarVari();

// 其实还是安全的？
console.log('>:' + typeof hello);

function letTwice(){
	let a = 1;
	let a = 2;
}

letTwice();

const PI = 3.14;
console.log(PI);

PI = 4;
console.log(PI);