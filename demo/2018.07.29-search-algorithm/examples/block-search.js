let {blockSearch} = require('../block-search');

let arr = [
  0, 3, 5,
  8, 11, 16,
  28, 30, 74,
  99, 108, 201
];
let indexArr = [5, 16, 74, 201];
console.log( blockSearch(arr, indexArr, 30, 3) ); // 7
console.log( blockSearch(arr, indexArr, 99, 3) ); // 9
console.log( blockSearch(arr, indexArr, 6, 3) ); // -1