const path = require('path');
const koa = require('koa');
const app = new koa();
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const koaViews = require('koa-views');

// 视图
const views = koaViews(__dirname + '/views', { map: { html: 'ejs' }});
app.use(views); // await ctx.render('profile', {nick: 'chyingp'});

// 静态文件
app.use(static(__dirname + '/public'));

// 参数解析
app.use(bodyParser());

// cookie（内置）
// app.use();

app.listen(3000);