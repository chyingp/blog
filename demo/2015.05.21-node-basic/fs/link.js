var fs = require('fs');

fs.link('./extra/fileForLink.txt', './extra/fileForLinkHard.txt', function(err){
	if(err) throw err;
	console.log('创建链接成功');
});