var Thunkify = function (fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments, 0);
        return function (callback) {
            args.push(callback);
            fn.apply(this, args);
        };
    };
};

module.exports = Thunkify;