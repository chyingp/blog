// function run(gen) {
//   console.log('index: 1');
//   var iter = gen(function (err, data) {
//     console.log('index: 4');
//     if (err) { iter.throw(err); }
//     iter.next(data);
//   });
//   console.log('index: 2');
//   iter.next();
// }

// run(function* (resume) {
//   console.log('index: 3');
//   var contents = yield require('fs').readFile('./hello.txt',{encoding: 'utf8'}, resume);
//   console.log(contents);
// });
var fs = require('fs');

function readFile (filepath) {
    // console.log('fuck 1');
    var gen = function * () {
        fs.readFile(filepath, {encoding: 'utf8'}, function (error, content) {
            if(error) it.throw(error);
            // console.log(content);
            return it.next(content);
        });
    };
    var it = gen();
    return it;
}

var goo = function * (){
    var it = readFile('./hello.txt');
    var content = yield it.next();
    console.log(content);
};

var g = goo();
g.next();
g.next();
