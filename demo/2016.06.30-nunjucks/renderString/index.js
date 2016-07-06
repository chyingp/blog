var nunjucks = require('nunjucks');

var res = nunjucks.renderString('Hello, my name is {{name}}', {name: 'chyingp'});

console.log(res);