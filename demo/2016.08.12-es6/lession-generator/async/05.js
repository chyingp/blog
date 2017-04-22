var fs = require('fs');
var thunkify = require('thunkify');
var co = require('co');
var readFile = thunkify(fs.readFile);

var gen = function * () {
    let r1 = yield readFile('./hello.txt');
    let r2 = yield readFile('./world.txt');
    console.log(r1.toString());
    console.log(r2.toString());
};

// co(gen).then(function(){
//     console.log('done');
// });

// co(function* () {
//   var res = yield [
//     Promise.resolve(1),
//     Promise.resolve(2)
//   ];
//   console.log(res);
// }).catch(function(e){
//     console.log(e.message);
// });

co(function* () {
  var res = yield [
    new Promise(function (resolve, reject) {
        setTimeout(function () { resolve('hello') }, 2000);
    }),
    new Promise(function (resolve, reject) {
        setTimeout(function () { resolve('world') }, 1000);
    }),
  ];
  console.log(res);
}).catch(function(e){
    console.log(e.message);
});