let persons = new Set(['Tom', 'Green', 'Kate']);
for(let name of persons) {
    console.log(name);
}
// Tom
// Green
// Kate

let map = new Map();
map.set('nick', 'chyingp');
map.set('gender', 'man');

for(let [key, value] of map) {
    console.log('key:%s, value:%s', key, value);
}
// key:nick, value:chyingp
// key:gender, value:man

let str = 'hello';
for(let s of str) console.log(s);
// h
// e
// l
// l
// o

// 例子：普通的 arr.forEach(callback) 无法半路跳出循环
let array = [1, 10, 100, 1000, 10000];
for(let num of array) {
    if(num > 100) break;
    console.log(num);
}
// 1
// 10
// 100