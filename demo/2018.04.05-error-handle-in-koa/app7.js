// 应用级别错误处理：主动抛出错误
const koa = require('koa');
const app = new koa();
const log4js = require('log4js');

log4js.configure({
  appenders: { error: { type: 'file', filename: 'logs/error.log' } },
  categories: { default: { appenders: ['error'], level: 'error' } }
});

const logger = log4js.getLogger();

app.use(async (ctx, next) => {
  // 不知道为什么，就是想要抛出点错误
  ctx.throw(500, 'some problem happened.');
});

app.on('error', (error) => {
  // 将日志记录下来
  logger.error(error);
});

app.listen(3000);