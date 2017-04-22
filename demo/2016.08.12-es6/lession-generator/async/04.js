function* gen () {
    var y = yield 1;
    return 'hello';
}

var g = gen();
console.log( g.next() );
console.log( g.next() );