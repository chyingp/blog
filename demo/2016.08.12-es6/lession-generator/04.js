function * foo () {
    for(let i = 0; true; i++) {
        let n = yield i;
        console.log(n);    
    }
}

let f = foo();
console.log( f.next() );
// { value: 0, done: false }

console.log( f.next() );
// undefined
// { value: 1, done: false }

console.log( f.next() );
// undefined
// { value: 2, done: false }

console.log( f.next(1000) );
// 1000
// { value: 3, done: false }