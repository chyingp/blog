function* gen(x){
  var y = yield x + 2;
  return y + 1;
}

var g = gen(1);
console.log( g.next() );// { value: 3, done: false }
console.log( g.next(2) ); // { value: 2, done: true }