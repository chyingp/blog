var escodegen = require('escodegen');
var ast = require('./ast');

var result = escodegen.generate(ast);

console.log(result);
