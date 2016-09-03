var http = require('http');

var times = 1000;
for(var i = 0; i < times; i++){
	http.get('http://127.0.0.1:8000', function(res){
		res.pipe(process.stdout);
	});
}
