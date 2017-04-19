// 备注：只要右侧是具有iterator接口的数据结构，就可以用数组形式的结构赋值
let [a1, a2, a3] = [1, 2, 3]
console.log(a1, a2, a3);  // 1 2 3

let [[b1, b2], c1] = [[1, 2], 3]
console.log(b1, b2, c1);  // 1 2 3

let [ , d1] = [1, 2]
console.log(d1);  // 2

let [e1, ,e2] = [1, 2, 3]
console.log(e1, e2);  // 1 3

let [f1, ...f2] = [1, 2, 3, 4]
console.log(f1);  // 1
console.log(f2);  // [2, 3, 4]

let [g1, ...g2] = [1]
console.log(g1);  // 1
console.log(g2);  // []

let [h1, h2] = [1, 2, 3]
console.log(h1)  // 1
console.log(h2)  // 2