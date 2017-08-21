var oldInt32 = new Int32Array(10);
oldInt32[0] = 10;
oldInt32[1] = 20;
oldInt32[2] = 30;

var newInt32 = new Int32Array(oldInt32.buffer, 0, 3);
console.log(newInt32[0]);  // 10
console.log(newInt32[1]);  // 20
console.log(newInt32[2]);  // 30