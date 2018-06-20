let addon = require('bindings')('math');

let sum = addon.add(1, 2);
console.log(sum); // 3