var fs = require('fs');
var thunkify = require('./thunkify');
var readFile = thunkify(fs.readFile);

function run (gen) {
    var g = gen();

    var next = function (err, data) {
        var result = g.next(data);
        if(result.done) return;
        result.value(next);
    };

    next();
}

function* gen () {
    var f1 = './hello.txt', f2 = './world.txt';
    var r1 = yield readFile(f1);
    console.log('content from %s is: %s', f1, r1);
    var r2 = yield readFile(f2);
    console.log('content from %s is: %s', f2, r2);
}

run(gen);