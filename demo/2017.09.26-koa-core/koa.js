const Emitter = require('events');
const http = require('http');

class Koa extends Event {
	constructor() {
		super();
		this.middleware = [];
	}

	use (fn) {
		this.middleware.push(fn);
	}

	listen(port) {
		http.createServer(this.callback())
			.listen(port);
	}

	callback() {
		const handleRequest = (request, response) => {
			let len = this.middleware.length;
			let ctx = {
				body: () => {}
			};

			for(let i = 0; i < len; i++) {
				await this.middleware[i]();
			}
		};
		return handleRequest;
	}
}

function respond () {

}