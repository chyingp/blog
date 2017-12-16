var int32 = new Int32Array(1);
int32[0] = 0x12345678;

var buff = new Buffer(int32.buffer);
console.log(buff);
// <Buffer 78 56 34 12>