const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');

// 参数解析
app.use(bodyParser());

app.use(async (ctx, next) => {  
  ctx.body = `status=${ctx.request.body.status}&message=${ctx.request.body.msg}`;
});

app.listen(3000);

/*
node app.bodyparser.js
curl -X POST http://127.0.0.1:3000 -d "status=2000&msg=ok"
*/