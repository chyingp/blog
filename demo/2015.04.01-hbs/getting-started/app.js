var express = require('express'),
	hbs = require('hbs'),
	app = express();

app.set('view engine', 'hbs');	// 用hbs作为模版引擎
app.set('views', __dirname + '/views');	// 模版所在路径

app.get('/', function(req, res){
    res.render('index', {title: 'hbs demo', author: 'chyingp'});
});

app.listen(3000);