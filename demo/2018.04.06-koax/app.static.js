const koa = require('koa');
const app = new koa();
const static = require('koa-static');

// 静态文件
app.use(static(__dirname + '/public'));

app.listen(3000);

/*
node app.static.js
curl http://127.0.0.1:3000/jquery.js
*/