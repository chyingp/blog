function bar () {
  var obj = {nick: 'chyingp'};
  var obj2 = {...obj};
  return obj2;
}

exports.bar = bar;
