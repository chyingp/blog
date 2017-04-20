var greet = function* () {
    yield 'how';
    yield 'are';
    yield 'you';
    return 'fine, thank you';
};

var g = greet();
console.log( g.next() );  // { value: 'how', done: false }
console.log( g.next() );  // { value: 'are', done: false }
console.log( g.next() );  // { value: 'you', done: false }
console.log( g.next() );  // { value: 'fine, thank you', done: true }
console.log( g.next() );  // { value: undefined, done: true }