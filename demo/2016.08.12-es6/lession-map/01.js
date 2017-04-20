let map = new Map();
let obj = {age: 29};
let obj2 = {age: 29};

map.set('nick', 'chyingp')
    .set('gender', 'man')
    .set('school', 'sysu');

// map.size
console.log(map.size);  // 3

// map.has(key)
console.log(map.has('nick'));  // true

// map.delete(key)
let delRet = map.delete('nick');
console.log(delRet);  // true

delRet = map.delete('nick');
console.log(delRet);  // false

map.set(obj, 'hello');
console.log(map.has(obj));  // true
console.log(map.has(obj2));  // false