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
	await next();
	console.log('second 02');
});

app.use(async (ctx, next) => {
	// ctx.body = 'Hello World';
	console.log('third 01');
	await next();
	console.log('third 02');
});

app.listen(3000);