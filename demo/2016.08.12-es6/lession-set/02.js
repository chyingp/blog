let set = new Set();

// 例子：set.add(v); => 添加元素，返回set自身；
set.add(1).add(2).add(2).add(3);
console.log(set.size);  // 3
console.log(set);  // Set { 1, 2, 3 }

// 例子：set.has(v); => 有，true；没有，false；
console.log( set.has(2) );  // true
console.log( set.has(5) );  // false

// 例子：set.delete(v); => 成功，true；失败，false；
console.log( set.delete(1) );  // true
console.log( set.delete(5) );  // false
console.log(set.size);  // 2
console.log(set);  // Set { 2, 3 }

// 例子：set.clear(); => 清除所有成员，没有返回值
set.clear();
console.log(set.size);  // 0
console.log(set);  // Set {  }