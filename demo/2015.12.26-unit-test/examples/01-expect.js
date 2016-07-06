var expect = require('chai').expect;
var assert = require('assert');

describe('expect', function(){
	describe('here', function(){
		if('is very kind', function() {
			expect('test').to.be.a('string');
			assert.equal(-1, [1,2,3].indexOf(0));
		});	
	}
});
