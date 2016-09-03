var expect = require('chai').expect;
var http = require('http');

describe('http.get', function() {
	it('should get web page without error', function(done) {

		http.get('http://www.baidu.com', function(res){
			done();
		}).on('error', function(e){
			done(e);
		});
	});
});