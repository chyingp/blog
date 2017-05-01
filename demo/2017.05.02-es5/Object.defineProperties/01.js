var obj = {};

Object.defineProperties(obj, {
    nick: {
        value: 'chyingp',
        writable: false
    },
    school: {
        value: 'sysu',
        writable: true
    }
});

console.log(obj.nick);  // chyingp
console.log(obj.school);  // sysu