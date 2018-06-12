const request = require('request');
const options = {
	method: 'GET',
	uri: 'http://127.0.0.1:3000/'
};

request(options, (error, response, body) => {
	if (error) {		
		console.log(`error occurred: ${error.message}`);
	} else {
		// server 返回500，error => null
		console.log(`got response, statusCode => ${response.statusCode}`);
		console.log(`body: ${body}`);
		console.log(`response: ${JSON.stringify(response)}`);
	}
});