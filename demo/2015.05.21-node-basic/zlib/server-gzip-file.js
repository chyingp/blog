var http = require('http');
var zlib = require('zlib');
var fs = require('fs');
var filepath = './extra/fileForGzip.html';

var server = http.createServer(function(req, res){
	var acceptEncoding = req.headers['accept-encoding'];
	var gzip;
	
	if(acceptEncoding.indexOf('gzip')!=-1){	// 判断是否需要gzip压缩
		
		gzip = zlib.createGzip();
		
		// 记得响应 Content-Encoding，告诉浏览器：文件被 gzip 压缩过
		res.writeHead(200, {
			'Content-Encoding': 'gzip'
		});
		fs.createReadStream(filepath).pipe(gzip).pipe(res);
	
	}else{

		fs.createReadStream(filepath).pipe(res);
	}

});

server.listen('3000');
