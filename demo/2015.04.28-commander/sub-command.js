var program = require('commander');

program1 = program
	.command('server')
	.usage('server usage')
	.description('server description')
	.action(function(){
		var args = Array.prototype.slice.call(arguments);
		console.log(args);
	});

program1
	.command('info')
	.description('server info')
	.action(function(){
		var args = Array.prototype.slice.call(arguments);
		console.log(args);
	});

// program
// 	.command('start')
// 	.description('server start');

program.parse(process.argv);