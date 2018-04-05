// 默认错误处理：404
const koa = require('koa');
const app = new koa();
const fs = require('fs');

app.use(async (ctx, next) => {
  // 读取不存在的文件
  ctx.body = fs.readFileSync('./filepathNotExisted.txt'); 
});

app.listen(3000);