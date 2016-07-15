var fs = require('fs');
var data;

try{
	data = fs.readFileSync('./fileForRead.txt', 'utf8');
	console.log('文件内容: ' + data);
}catch(err){
	console.error('读取文件出错: ' + err.message);
}

