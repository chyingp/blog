// fs.readdir(path[, options], callback)

var fs = require('fs');
var path = require('path');

var flatten = function(arr){
	var results = [];
	arr.forEach(function(item){
		if(item.length){
			results = results.concat( flatten(item) );
		}else{
			results.push(item);
		}
	});
	return results;
};

var getFilesInDir = function(dir, callback){

	var results = [ path.resolve(dir) ];

	fs.readdir(dir, 'utf8', function(err, files){

		if(err) throw err;

		var promiseList = files.map(function(file){

			file = path.resolve(file);

			var stats = fs.statSync(file);

			if(stats.isFile()){

				return Promise.resolve(file);

			}else if(stats.isDirectory()){

				return new Promise(function(resolve, reject){
					getFilesInDir(file, function(files){

					});
				});
			}
		});

		Promise
			.all(promiseList)
			.then(function(values){
				callback( );
			});
	});
};

getFilesInDir('..');

// encoding 默认是 utf8
// files不包含 "." ".."