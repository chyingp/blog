var fs = require('fs');

console.log('uid: ' + process.geteuid());
console.log('gid: ' + process.getegid());

fs.access('./fileForAccess.txt', function(err){
	if(err) throw err;
	console.log('可以访问');
});