const koa = require('koa');
const app = new koa();
const Router = require('koa-router');

const router = new Router({
  prefix: '/users'
});

router.get('/', async (ctx, next) => {
  ctx.body = '/users';
});
router.get('/:id', async (ctx, next) => {
  ctx.body = `/users/${ctx.params.id}`;
});

app.use(router.routes());

app.listen(3000);

/*
node app.router.js
curl http://127.0.0.1:3000/users/
curl http://127.0.0.1:3000/users/10086
*/