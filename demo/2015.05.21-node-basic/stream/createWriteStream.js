var fs = require('fs');
var writeStream = fs.createWriteStream('./fileForWrite1.txt', 'utf8');

writeStream
	.on('close', function(){  // 已经关闭，不会再有事件抛出
		console.log('已经关闭');
	});

writeStream.write('hello');
writeStream.write('world');
writeStream.end('');
