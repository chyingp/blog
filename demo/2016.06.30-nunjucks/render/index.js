var nunjucks = require('nunjucks');

// var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(['./']));

var res = nunjucks.render('foo.html', {
	name: 'chyingp'
});

console.log(res);