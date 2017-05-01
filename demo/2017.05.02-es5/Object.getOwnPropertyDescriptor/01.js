// 返回自有属性的 descriptor，不包含继承来的属性的 descriptor，比如 toString 
var obj = {
    nick: 'chyingp'
};

Object.defineProperty(obj, 'school', {
    value: 'sysu'
});

console.log(Object.getOwnPropertyDescriptor(obj, 'nick'));
// { value: 'chyingp',
//   writable: true,
//   enumerable: true,
//   configurable: true }


console.log(Object.getOwnPropertyDescriptor(obj, 'school'));
// { value: 'sysu',
//   writable: false,
//   enumerable: false,
//   configurable: false }

console.log(Object.getOwnPropertyDescriptor(obj, 'gender'));
// undefined

console.log(Object.getOwnPropertyDescriptor(obj, 'toString'));
// undefined