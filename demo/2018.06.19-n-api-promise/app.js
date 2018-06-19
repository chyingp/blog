var addon = require('bindings')('hello');

addon.hello();

var addon2 = require('bindings')('world');

addon2.getPromise().then(() => {
  console.log('resolved');
});