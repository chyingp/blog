var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(done){
      setTimeout(function(){
      	assert.equal(15, [1,2,3].indexOf(5));
      	assert.equal(-1, [1,2,3].indexOf(0));
      	// done(new Error('出错啦!'));
      	done();
      }, 1500);      
    })
  })
})