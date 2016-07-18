var fs = require('fs');

fs.mkdir('sub', function(err){
	if(err) throw err;
	console.log('创建目录成功');
});