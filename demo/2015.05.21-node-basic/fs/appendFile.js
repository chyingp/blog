var fs = require('fs');

fs.appendFile('./extra/fileForAppend.txt', 'helo', 'utf8', function(err){
	if(err) throw err;
	console.log('append成功');
});