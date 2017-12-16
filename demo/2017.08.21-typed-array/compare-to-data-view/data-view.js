var arrayBuffer = new ArrayBuffer(4);
var view = new DataView(arrayBuffer);

view.setInt32(0, 0x12345678, false);

var buffer = new Buffer(arrayBuffer);
console.log(buffer);
// <Buffer 12 34 56 78>