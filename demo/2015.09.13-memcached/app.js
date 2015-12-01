var Memcached = require('memcached');
var memcached = new Memcached('localhost:11211');
var lifetime = 86400; //24hrs

// memcached.set('name', 'chen', lifetime, function( err, result ){  
// 	if( err ) console.error( err );  
// 	// console.dir( result );
// 	console.log('set: ' + result);	
// });

// // console.log('hello');

// memcached.get('name', function( err, result ){  
// 	if( err ) console.error( err );  
// 	// console.dir( result );
// 	console.log('get: ' + result);
// });

// memcached.get('test', function( err, result ){  
// 	if( err ) console.error( err );  
// 	// console.dir( result );
// 	console.log('get test: ' + result);
// });

// memcached.set('fuck', 'you', lifetime, function(err, result){
// 	if(err) console.error(err);
// 	console.log('fuck');
// });

// memcached.gets('name', function (err, data) {
//   console.log(data.name);
//   console.log(data.cas);
 
//   // Please note that the data is stored under the name of the given key. 
// });

// memcached.getMulti(['name', 'fuck'], function (err, data) {
//   console.log(data.name);
//   console.log(data.fuck);
// });

// memcached.replace('you', 'fuck', lifetime, function(err, result){
// 	if(err) console.error(err);
// 	console.log('you');
// });

// memcached.set('you', 'fuck', lifetime, function(err, result){
// 	if(err) console.error(err);
// 	console.log('you');
// });

// memcached.append('go', 'away', function (err) {
// 	if(err) console.error(err);
// 	console.log('go away');
// });

// memcached.set('name', 'chyingp', lifetime, function( err, result ){  
// 	if( err ) console.error( err );  
// 	console.log('set: ' + result);

// 	memcached.del('name', function(err){
// 		if(err) console.log('set: ' + result);
// 	});	
// });
memcached.get('name', function( err, result ){  
	if( err ) console.error( err );  
	// console.dir( result );
	console.log('get name: ' + result);
});
// 增、删、改、查