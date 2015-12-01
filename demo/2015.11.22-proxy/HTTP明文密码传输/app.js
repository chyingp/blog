var request = require('request');
var express = require('express');
var app = express();

app.use(function(req, res, next){
	var originalUrl = req.originalUrl;
	console.log('hre comes the request: ' + originalUrl);
	
	var options = {
		method: 'GET',
		uri: originalUrl
	};
	request(options, function(error, response, body){
		if (!error && response.statusCode == 200) {			
			
			if(originalUrl.match(/\.html$/)){
				body = body.replace('</head>', '<script>alert("fuck");</script></head>');
			}
			
			res.send(body);
		}
	});
});
app.listen(3030);