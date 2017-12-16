var Rx = require('rxjs');

var foo = Rx.Observable.create(function (observer) {
  console.log('Hello');
  observer.next(42);
});

console.log('before');
foo.subscribe(function (x) {
  console.log(x);
});
console.log('after');