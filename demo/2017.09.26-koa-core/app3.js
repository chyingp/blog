async function foo1 () {
	return await foo2();
}

async function foo2 () {
	return Promise.resolve('hello');
}

async function run() {
	var let = await foo1();
	console.log(let);
	return 'run';
}

run().then((str) => console.log(str));