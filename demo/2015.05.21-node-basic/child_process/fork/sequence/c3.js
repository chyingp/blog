process.nextTick(function(){
	process.nextTick(function(){
		process.on('message', function(msg){
			console.log(msg);
		});	
	});
});

setTimeout(function(){

}, 10);
