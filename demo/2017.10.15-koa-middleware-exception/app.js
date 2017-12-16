var koa = require('koa');
var app = new koa();

// app.use(async (ctx, next) => {
//   try {
//     await next()
//   } catch(error) {
//     ctx.body = 'error: ' + error.message;
//   }
// });

app.use(async (ctx, next) => {
  // if (ctx.request.url.indexOf('ico') !== -1) return;
  // console.log('hello');
  // throw new Error('hello');
  let ret = await next(new Error('you'));
  console.log(ret);
  ctx.body = ret;
  // console.log('hello: 1');
  // ctx.body = 'hello: 1';
  // throw new Error('hello: 1');
  // await next();
  // ctx.body = 'hello: 2';
  // console.log('hello: 2');
});

app.use(async (ctx, next) => {
  // console.log('world');
  return 'fuck';
  // ctx.body = 'world';
  // console.log('world: 1');
  // ctx.body = 'world';
});

app.listen(3000);