var fs = require('fs');

var options = {
	persistent: true,
	recursive: true,
	encoding: 'utf8'
};

fs.watch('../', options, function(event, filename){
	console.log('触发事件:' + event);
	if(filename){
		console.log('文件名是: ' + filename);
	}else{
		console.log('文件名是没有提供');
	}
});