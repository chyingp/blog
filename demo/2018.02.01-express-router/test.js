var pathToRegexp = require('path-to-regexp')

var keys = [];
var re = pathToRegexp('/:foo/:bar', keys)
console.log(keys)