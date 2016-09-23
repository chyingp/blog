var http = require('http');
var jsonBody = require("body/json");
var Buffer = require('buffer').Buffer;
var querystring = require('querystring');

// http://wdev.wqiquan.com/cgi/account/org/query_unchecked_user?client_env=4&query_flag=1&page_size=10&check_status=0
var hostname = 'www.wqiquan.com';
var port = 80;
var path = '/cgi/account/org/query_unchecked_user';
var postData = querystring.stringify({
 	client_env: 4,
 	query_flag: 1,
 	page_size: 10,
 	check_status: 0
});
var reqOptions = {
	method: 'POST',
	protocol: 'http:',
	hostname: hostname,
	port: port,
	path: path,
	headers: {
		'Accept': 'application/json',
		'Content-Length': Buffer.byteLength(postData)
	}
};

console.log(postData.length);
console.log(Buffer.byteLength(postData));

var req = http.request(reqOptions, function(res){
	res.setEncoding('utf8');

	var responseString = '';

	  res.on('data', function(data) {
	    responseString += data;
	    console.log(data);
	  });

	  res.on('end', function(res) {
	  //这里接收的参数是字符串形式,需要格式化成json格式使用
	    //var resultObject = JSON.parse(responseString);
	    console.log('hello');
	    // console.log(res);
	  });

	  req.on('error', function(e) {
	      // TODO: handle error.
	      console.log('-----error-------',e);
	});
});

req.on('error', function(e){
	console.log('client says: error occured! ' + e.message);
});

req.write(postData);
req.end();
