var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
var assert = require('assert');

// var findRestaurants = function(db, callback){
// 	// var cursor = db.collection('restaurants').find({borough: 'casperchen'});
// 	var cursor = db.collection('restaurants')
// 					.find({
// 						'grades.grade': {$gt: 30}
// 					});

// 	cursor.each(function(err, doc){
// 		assert.equal(null, err);
// 		if(doc!=null){
// 			console.dir(doc);
// 		}else{
// 			callback();
// 		}
// 	});
// };

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find(
       { $or: [ { "cuisine": "Italian" }, { "address.zipcode": "10075" } ] }
   );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
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