// 例子：不存在变量提升

// ES5
new Foo();  // 不会报错
function Foo() {}

// 例子：ES6
new Bar();  // ReferenceError: Bar is not defined
class Bar {}