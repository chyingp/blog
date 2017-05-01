// value：默认是undefined
var obj = {
    nick: 'chyingp'
};

Object.defineProperty(obj, 'school', {
    value: 'sysu'
});
Object.defineProperty(obj, 'gender', {});

console.log(obj.school);  // sysu
console.log(obj.gender);  // undefined