// 应用级别错误处理：将日志全部记录到 error.log 里
const koa = require('koa');
const app = new koa();
const log4js = require('log4js');

log4js.configure({
  appenders: { error: { type: 'file', filename: 'logs/error.log' } },
  categories: { default: { appenders: ['error'], level: 'error' } }
});

const logger = log4js.getLogger();

app.use(async (ctx, next) => {
  try {    
    await next();
  } catch (error) {
    console.log('错误被捕获');
    ctx.body = '什么都没发生';
    logger.error(error);
  }
});

app.use(async (ctx, next) => {
  // 抛出错误
  ctx.throw(500, '抛出错误');
});

app.on('error', (error) => {
  console.log('error happened.');
});

app.listen(3000);