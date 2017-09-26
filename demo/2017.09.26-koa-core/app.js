const koa = require('./koa');
const app = new koa();

app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`cost ${ms} millseconds`);
});

app.use(async (ctx, next) => {
	ctx.body = 'Hello World';
});

app.listen(3000);