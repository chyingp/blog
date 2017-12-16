const Emitter = require('events');
const http = require('http');

module.exports = class Koa extends Emitter {
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
		let len = this.middleware.length;

		// 分两种情况
		// 1、当前不是最后一个中间件
		// 2、当前是最后一个中间件
		const runMiddleware = (ctx, index) => {
			// 最后一个中间件
			if (index === len - 1) {
				return this.middleware[index](ctx, () => {});
			} else {
				return this.middleware[index](ctx, () => {
					return runMiddleware(ctx, index + 1);
				});
			}
		};

		const handleRequest = (request, response) => {
			let ctx = {
				body: () => {}
			};

			runMiddleware(ctx, 0)
				.then(() => {
					response.end('ok');
				})
		};

		return handleRequest;
	}
}

function respond () {

}