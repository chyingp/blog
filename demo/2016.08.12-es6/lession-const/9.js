// 通过let、const声明的变量，不会挂到顶层的对象上（比如浏览器中的window，node中的global）
// 注意，下面代码，可以在 node REPL 中运行，或在网页中执行

// > var a = 1;
// undefined
// > console.log(global.a);
// 1
// undefined
// > let b = 2;
// undefined
// > console.log(global.b);
// undefined
// undefined