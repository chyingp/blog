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

co(gen).then(function(){
    console.log('done');
});