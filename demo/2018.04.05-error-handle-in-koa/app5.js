// 默认错误处理：通过 ctx.throw(code) 抛出错误
const koa = require('koa');
const app = new koa();
const fs = require('fs');

app.use(async (ctx, next) => {
  // 错误场景：通过 ctx.throw(code) 主动抛出错误
  ctx.throw(901);
});

app.listen(3000);