var expect = require('chai').expect;
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect( [1,2,3].indexOf(4) ).to.equal( -1 );      
    });
    it('should return 0 when the value is the first one', function() {
      expect( [1,2,3].indexOf(1) ).to.equal( 0 ); 
    });
  });
});