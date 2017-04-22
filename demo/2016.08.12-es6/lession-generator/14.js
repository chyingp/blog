let obj = {
    * foo () {
        yield 1;
    },

    bar: function * () {
        yield 2;
    }
};

console.log( obj.foo().next() );  // { value: 1, done: false }
console.log( obj.bar().next() );  // { value: 2, done: false }