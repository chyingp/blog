const util = require('util');

class MyError extends Error {
  constructor (code, message, props = {}) {
    super();
    this.name = 'MyError';
    this.code = code;
    this.message = message;
    Object.assign(this, props);
  }
}

function TestError (code, message) {
  this.name = 'TestError';
  this.code = code;
  this.message = message;
  Error.captureStackTrace(this);
}

function TestError2 (code, message) {
  this.name = 'TestError';
  this.code = code;
  this.message = message;
  Error.captureStackTrace(this, TestError2);
}


function run () {
  const err = new MyError(200600, 'fuck');
  throw err;
  // let obj = {};
  // Error.captureStackTrace(obj);
  // console.log(obj.stack);

  // const err = new TestError2(200300, 'server error');
  // throw err;
}

// try {
//   run();
// } catch (e) {
//   console.log(e.stack);
// }
run();