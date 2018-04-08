const http = require('http');
const port = 3000;
const url = require('url');
const querystring = require('querystring');

function sleep (timeout) {
	return new Promise(resolve => {
		setTimeout(() => resolve(), timeout);
	});
}

let reqId = 0;

const server = http.createServer(async (req, res) => {
	const query = url.parse(req.url).query;
	const timeout = querystring.parse(query).timeout || 1000;

	const curReqId = ++reqId;

	const start = new Date();
	console.log(`[${curReqId}] start at ${start}`);

	await sleep(timeout);
	
	const end = new Date();
	console.log(`[${curReqId}] end at ${end}`);

	res.end(`[${curReqId}] start at ${start} and end at ${end}`);
});

server.listen(port);