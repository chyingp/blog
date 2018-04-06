const koa = require('koa');
const app = new koa();
const log4js = require('log4js');

log4js.configure({
  appenders: { error: { type: 'file', filename: 'logs/error.log' } },
  categories: { default: { appenders: ['error'], level: 'error' } }
});

const logger = log4js.getLogger();

const defaultStatus = 200;
const defaultCode = 10001;
const defaultMessage = 'server error';

class CustomerError extends Error {
  constructor (message, {code = defaultCode, status = defaultStatus} = {}) {
    super(message);    
    this.name = 'CustomerError';
    this.code = code;
    this.status = status;
    // this.message = message;
    // Object.assign(this, props);
  }
}

app.use(async (ctx, next) => {
  try {    
    await next();
  } catch (error) {
    switch (error.code) {
      case 10001:
        ctx.body = 'hello';
        break;
      case 10002:
        ctx.body = 'world';
        break;
      default:
        ctx.body = 'server error';
        break;     
    }
    logger.error(error);
  }
});

app.use(async (ctx, next) => {
  const code = ctx.query.code ? ctx.query.code - 0 : 0;
  ctx.throw(`code is ${code}`, {
    code: code
  });  
  // ctx.throw(500, '抛出错误');
});

app.on('error', (error) => {
  console.log('error happened.');
});

app.listen(3000);