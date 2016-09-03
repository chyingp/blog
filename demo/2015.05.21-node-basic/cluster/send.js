var cluster = require('cluster');

if (cluster.isMaster) {
	var worker = cluster.fork();
	console.log('AAA');
	worker.send('hi there');

} else if (cluster.isWorker) {
	console.log('BBB');
	//process.on('message', (msg) => {
	//	console.log(msg);
	//	process.send(msg);
	//});
	setTimeout(function(){
		process.on('message', (msg) => {
			console.log(msg);
			process.send(msg);
		});
	}, 1000)
}