const http = require('http');

// Create an HTTP server
var srv = http.createServer( (req, res) => {
  console.log(req);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('okay');
});

// now that server is running
srv.listen(1337, '127.0.0.1', () => {

});

