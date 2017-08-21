var oldInt32 = new Int32Array(10);
oldInt32[0] = 20;
console.log(oldInt32[0]);  // 20

var newInt32 = new Int32Array(oldInt32);
console.log(newInt32[0]);  // 20