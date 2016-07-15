var fs = require('fs');

fs.access('./fileForRead.txt', function(err){
	if(err) throw err;
	console.log('fileForRead.txt存在');
});

fs.access('./fileForRead2.txt', function(err){
	if(err) throw err;
	console.log('fileForRead2.txt存在');
});