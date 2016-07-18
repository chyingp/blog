var fs = require('fs');

try{
	fs.accessSync('./fileForAccess.txt');
}catch(e){
	throw(e);
}