// 默认错误处理：500
const koa = require('koa');
const app = new koa();
const fs = require('fs');

app.use(async (ctx, next) => {
  // 脚本错误的场景，hello 变量不存在
  ctx.body = hello;
});

app.listen(3000);