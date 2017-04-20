// 备注：类似 WeakSet，WeakMap 对对象的引用，也是弱引用，不计入垃圾回收的计数
// 用途：比如 jquery 的data方法 $(el).data('count', 1) ，就可以考虑用 WeakMap
var wm = new WeakMap();

var obj1 = {};
var obj2 = {};

wm.set(obj1, 1);
wm.set(obj2, 1);

console.log(wm.get(obj1));  // 1

// 备注：只接受object作为key，number、string、boolean、null不能作为key
try {
    wm.set(1, 2);
}catch(e){
    console.log(e.message);  // Invalid value used as weak map key
}