var fs = require('fs'),
	filepath = 'res/jquery.js',
	stream = fs.createReadStream(filepath);

stream.on('data', function(data){	
	console.log(data.toString());
});
stream.on('end', function(err, data){
	console.log('end');
});