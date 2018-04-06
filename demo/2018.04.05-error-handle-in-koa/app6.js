// 应用级别错误处理：被动触发的错误
const koa = require('koa');
const app = new koa();
const log4js = require('log4js');

log4js.configure({
  appenders: { error: { type: 'file', filename: 'logs/error.log' } },
  categories: { default: { appenders: ['error'], level: 'error' } }
});

const logger = log4js.getLogger();

app.use(async (ctx, next) => {
  console.log(noneExistedVar); // 错误：不存在的变量
});

app.on('error', (error) => {
  logger.error(error); // 将日志记录下来
});

app.listen(3000);