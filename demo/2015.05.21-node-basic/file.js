var fs = require('fs'),
	filepath = 'res/4.png';

fs.readFile(filepath, function(err, data) {	
	
	fs.unlink(filepath);
});