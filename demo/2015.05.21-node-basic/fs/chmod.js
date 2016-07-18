var fs = require('fs');

fs.chmod('./fileForChown.txt', '777', function(err){
	if(err) console.log(err);
	console.log('权限修改成功');
});