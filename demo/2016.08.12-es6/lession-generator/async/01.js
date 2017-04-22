var fs = require('fs');

var Thunk = function (filepath) {
    return function (callback) {
        fs.readFile(filepath, {encoding: 'utf8'}, callback);
    };
};

var readFile = Thunk('../hello.txt');
readFile(function (error, content) {
    console.log('thunk, content is: %s', content);
});

var Thunkify = function (fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments, 0);
        return function (callback) {
            args.push(callback);
            fn.apply(this, args);
        };
    };
};

Thunkify(fs.readFile)('../hello.txt')(function(error, content){
    console.log('thunkify, content is:%s', content);
});