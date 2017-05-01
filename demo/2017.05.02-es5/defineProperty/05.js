// getter、setter
var obj = {};
var index = 0;

Object.defineProperty(obj, 'nick', {
    get: function () {
        return this._nick.toUpperCase();
    },
    set: function (v) {
        this._nick = [v, ++index].join('-');
    }
});

obj.nick = 'chyingp';
console.log(obj.nick);
// CHYINGP-1

obj.nick = 'casper';
console.log(obj.nick);
// CASPER-2