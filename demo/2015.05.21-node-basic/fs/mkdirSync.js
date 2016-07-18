var fs = require('fs');

try{
	fs.mkdirSync('hello');
	console.log('创建目录成功');
}catch(e){
	throw e;
}