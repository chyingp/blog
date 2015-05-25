var express = require('express'),
	app = express();

// 最常见的情况

// 根据参数，比如 

// 创建路由实例
var router = express.Router({
	caseSensitive: false,	// 默认是false，treating “/Foo” and “/foo” as the same.
	strict: false	// 默认是false， “/foo” and “/foo/” are treated the same by the router.
});

// router.param(callback) is deprecated as of v4.11.0.
router.param('id', function(req, res, next, value){
	console.log('id is %s', value);
	next();
});

// /hello/123 会被匹配中
// /hello/?id=123 不会
router.use('/hello/:id', function(req, res, next){
	console.log('id is %s', req.params.id);
	res.send('this is hello');
	// next();
});

router.use('/hello/', function(req, res, next){
	res.send('hello');
});

router.use('/world', function(req, res, next){
	res.send('world');
});

router.use('/user/:user_id/profile', function(req, res, next){
	console.log('user id is : %s', req.params.user_id);
	res.send('hello world !');
});

app.use(router);
app.listen(3000);


// 子路由
// 正则 vs glob
// 各种method

// router.all('/api/*');
// router.param('user')