const assert = require('assert');

/*
[succ] start at: Wed Mar 28 2018 23:40:14 GMT+0800 (CST)
[succ] end at: Wed Mar 28 2018 23:40:15 GMT+0800 (CST)
    ✓ succ (1008ms)
[err] start at: Wed Mar 28 2018 23:40:15 GMT+0800 (CST)
[err] end at: Wed Mar 28 2018 23:40:16 GMT+0800 (CST)
*/

describe('async test', function() {  

  it('succ', done => {
    let startDate = new Date();
    console.log('[succ] start at: %s', startDate);  
    setTimeout(() => {
      let endDate= new Date();
      // console.log('succ: %d', endDate - startDate);
      console.log('[succ] end at: %s', endDate);  
      done();
    }, 1000);    
  });

  it('err', done => {
    let startDate = new Date();
    console.log('[err] start at: %s', startDate);  
    setTimeout(() => {
      let endDate= new Date();
      // console.log('succ: %d', endDate - startDate);
      console.log('[err] end at: %s', endDate);  
      done(new Error('async test failed.'));
    }, 1000);  
  });
});

// ./node_modules/.bin/mocha test/asyncTest.js