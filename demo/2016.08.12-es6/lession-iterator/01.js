var arr = [1, 2, 3];
var it = arr[Symbol.iterator]();

console.log( it.next() );   // { value: 1, done: false }
console.log( it.next() );   // { value: 2, done: false }
console.log( it.next() );   // { value: 3, done: false }
console.log( it.next() );   // { value: undefined, done: true }