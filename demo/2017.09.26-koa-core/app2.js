// http.createServer(app.callback()).listen(3000);
async function foo () {
	console.log('hello');
	setTimeout(function () {
		console.log('joke');
	}, 50);
}

async function joke () {
	console.log('hello');
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('joke'), 1000);
	});
}

async function run () {
	let ret = await joke();
	console.log(ret);
	console.log('world');
};

run();