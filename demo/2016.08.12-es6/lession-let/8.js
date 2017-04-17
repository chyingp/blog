function foo(x = 2, y = x) {
  console.log([x, y]);
}

foo(); // [ 2, 2 ]

function bar(x = y, y = 2) {
  console.log([x, y]);
}

bar(); // ReferenceError: y is not defined