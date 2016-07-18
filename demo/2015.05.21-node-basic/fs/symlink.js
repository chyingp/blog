var fs = require('fs');

fs.symlink('./extra/fileForLink.txt', './extra/fileForLinkSoft.txt', function(err){
	if(err) throw err;
	console.log('创建软链接成功');
});