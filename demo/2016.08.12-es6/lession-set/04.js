// 1、WeakSet 中的对象obj，都是弱引用
// 2、当外部没有对 该obj的引用，obj就可能会被回收（取决于垃圾回收期什么时候开始清理）
// 3、因此，WeakSet 不适合做为引用，不能进行遍历（也没有.size）
let ws = new WeakSet();
let obj = {};

ws.add(obj);
console.log( ws.has(obj) );  // true

ws.delete(obj);
console.log( ws.has(obj) );  // false

try{
    ws.add(1);  // TypeError: Invalid value used in weak set
}catch(e){
    console.log(e.message);
}