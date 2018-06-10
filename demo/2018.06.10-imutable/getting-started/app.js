const { Map } = require('immutable');
const map1 = Map({ nick: 'chyingp', school: 'sysu' });
const map2 = map1.set('nick', 'casper');

console.log( map1.get('nick') ); // chyingp
console.log( map2.get('nick') ); // casper