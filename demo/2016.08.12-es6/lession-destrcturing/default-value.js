// 解构赋值的默认值

let [x, y = 2] = [1]
console.log(x)  // 1
console.log(y)  // 2

let [a = 1] = [undefined]
console.log(a)  // 1

let [z = 1] = [null]  // 判断是否有值，用的是 ===，所以这里z可以解构赋值成功
console.log(z)  // null