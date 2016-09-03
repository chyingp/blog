var expect = chai.expect;

describe('Async', function() {
  describe('#getResult', function() {
    it('success example', function(done) {
      setTimeout(function(){
      	done();
      }, 1000);   
    }); 
    it('failure example', function(done) {
      setTimeout(function(){
      	done(new Error('async failure'));
      }, 1000);
    });   
  });
});