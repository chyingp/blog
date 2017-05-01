var obj = {};

Object.defineProperty(obj, 'nick', {value: 'chyingp'});
Object.defineProperty(obj, 'school', {value: 'sysu'});

// chrome 57下正常运行，node 6.1.0 报错
// Initial definition in ES8 / ECMAScript 2017.
console.log(Object.getOwnPropertyDescriptors(obj));

