// 对比3
let arr = [];
for(var i = 0; i < 10; i++) {
	arr[i] = function () {
		console.log(i);
	};
}
arr[5]();  // 10

let arr2 = [];
for(let j = 0; j < 10; j++) {
	arr2[j] = function () {
		console.log(j);
	};
}
arr2[5]();  // 5