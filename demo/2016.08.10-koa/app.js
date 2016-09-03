var koa = require('koa');
var app = koa();

// x-response-time

app.use(function *(next){
  var start = new Date;
  console.log('a1');
  yield next;
  console.log('a2');
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  console.log('b1');
  yield next;
  console.log('b2');
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
  console.log('c1');
  this.body = 'Hello World';
});

app.listen(3000);