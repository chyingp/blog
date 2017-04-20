let Foo = class {}
let foo = new Foo();
console.log(foo.constructor);  // [Function: Foo]

let Bar = class BarInner {
    constructor () {
        this.nick = 'bar';
    }

    greet () {
        // console.log(`BarInner.nick: %s`, this.nick);
        console.log(BarInner.name);
    }
}
let bar = new Bar();  // 备注：此时类名是 Bar，BarInner 只能在类内部使用
bar.greet();  // BarInner
console.log(bar.constructor);  // [Function: BarInner]

let baz = new class {
    constructor (nick) {
        this.nick = nick;
    }
}('baz');
console.log(baz.nick);  // baz