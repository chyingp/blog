var arr = [1, 2, 3];
var int32 = Int32Array.from(arr);
console.log(int32);  // Int32Array [ 1, 2, 3 ]

int32 = Int32Array.from(arr, ele => ele + 1);
console.log(int32);  // Int32Array [ 2, 3, 4 ]

var set = new Set();
set.add(1);
set.add(2);

int32 = Int32Array.from(set);
console.log(int32);  // Int32Array [ 1, 2 ]