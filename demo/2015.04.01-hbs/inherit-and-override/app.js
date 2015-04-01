var express = require('express'),
	hbs = require('hbs'),
	app = express();

app.set('view engine', 'hbs');	// 用hbs作为模版引擎
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));	// 静态资源

var blocks = {};

hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.registerHelper('block', function(name, context) {
	var len = (blocks[name] || []).length;
    var val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];

    if(!len){
    	return context.fn(this);
    }else{
    	return val;
    }
});

app.get('/', function(req, res){
    res.render('index', {title: 'hbs demo', author: 'chyingp'});
});

app.get('/profile', function(req, res){
    res.render('profile', {title: 'hbs demo', author: 'chyingp'});
});

app.listen(3000);