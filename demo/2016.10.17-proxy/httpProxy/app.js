var http = require('http');
var url = require('url');

var server = http.createServer(function(cReq, cRes){
	var obj = url.parse(cReq.url);
	var options = {
		method: cReq.method,
		host: obj.host,
		path: obj.path,
		headers: cReq.headers
	};

	var sReq = http.request(options, function(sRes){
		cRes.writeHead(sRes.statusCode, sRes.headers);
		sRes.pipe(cRes);
	});

	cReq.pipe(sReq);
});

server.listen(8989);