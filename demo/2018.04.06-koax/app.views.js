const koa = require('koa');
const app = new koa();
const koaViews = require('koa-views');

const views = koaViews(__dirname + '/views', { map: { html: 'ejs' }});
app.use(views); // await ctx.render('profile', {nick: 'chyingp'});

app.use(async (ctx, next) => {
  await ctx.render(ctx.path.replace(/^\//, ''), {title: 'koa-views'});
});

app.listen(3000);

/*
node app.views.js
curl http://127.0.0.1:3000/page.html
*/