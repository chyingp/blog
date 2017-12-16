var child = require('./child');

function foo () {
  var obj = {nick: 'chyingp'};
  var obj2 = {...obj};
  return obj2;
}

exports.foo = foo;
