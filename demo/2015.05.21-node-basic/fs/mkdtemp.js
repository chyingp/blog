var fs = require('fs');

fs.mkdtemp('/tmp/', function(err, folder){
	if(err) throw err;
	console.log('创建临时目录: ' + folder);
});