var http = require('http');
http.get("http://ke.qq.com/index.html", function(res) {
	console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});