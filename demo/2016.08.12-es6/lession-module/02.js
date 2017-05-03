var mod = require('./01');
console.log(mod.m);

setTimeout(function() {
    console.log(mod.m);
}, 2000);