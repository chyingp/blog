const koa = require('./koa');
const app = new koa();

app.use(async (ctx, next) => {
	console.log('first 01');
	await next();
	console.log('first 02');
	// const start = Date.now();
	// await next();
	// const ms = Date.now() - start;
	// console.log(`cost ${ms} millseconds`);
});

app.use(async (ctx, next) => {
	// ctx.body = 'Hello World';
	console.log('second 01');
});

app.listen(3000);