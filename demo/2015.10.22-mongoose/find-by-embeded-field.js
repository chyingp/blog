var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
var assert = require('assert');

var findRestaurants = function(db, callback){
	var cursor = db.collection('restaurants').find({'address.street': '2 Avenue'});
	cursor.each(function(err, doc){
		assert.equal(null, err);
		if(doc!=null){
			console.dir(doc);
		}else{
			callback();
		}
	});
};

MongoClient.connect(url, function(err, db){
	assert.equal(null, err);
	console.log("Connected correctly to server.");
	findRestaurants(db, function(){
		db.close();
	});	
});