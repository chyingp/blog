var express = require('express'),
	app = express();

app.set('view engine', 'hbs');  // 用hbs作为模版引擎
app.set('views', __dirname + '/views'); // 模版所在路径
app.use(express.static(__dirname + '/public'));

app.get('/index', function(req, res, next){
	var props = {
      items: [
        'Item 0',
        'Item 1',
        'Item </script>',
        'Item <!--inject!-->',
      ]
    };
	var React = require('react');
	var Todos = React.createFactory(require('./public/js/todos'));
	var markup = React.renderToString(Todos(props));

	res.render('index', {
		content: markup
	});
});
app.get('/test', function(req, res, next){
	res.render('test');
});
app.listen(3000);