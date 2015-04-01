var express = require('express'),
	hbs = require('hbs'),
	app = express();

app.set('view engine', 'hbs');	// 用hbs作为模版引擎
// app.engine('html', require('hbs').__express);	// 模版的文件名后缀为html
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('index', {
    	title: 'hbs demo',
    	author: 'chyingp'
    });
});

app.listen(3000);



	