const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    it('should return 0 when the value is at index 0', function() {
      assert.equal([1,2,3].indexOf(1), 0);
    });
  });
});

describe('String', function() {
  describe('#slice()', function() {
    it('"javascript".slice(0, 4) === "java"', function() {
      assert.equal('javascript'.slice(0, 4), 'java');
    });
  });
});