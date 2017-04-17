// 对比：不存在变量提升
console.log(a);  // undefined
var a = 2;

console.log(b);  // ReferenceError: b is not defined
let b = 3;