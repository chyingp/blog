var http = require('http');
var net = require('net');

var index = `
<script>
// var ws = new WebSocket('ws://47.89.14.93:3131');
var ws = new WebSocket('ws://127.0.0.1:3131');
ws.onopen = function () {
    // ...
};
</script>
`;

var server = http.createServer((req, res) => { 
    console.log(server._handle);   
    console.log(server._handle instanceof net.Server);   
    console.log(req.headers.connection);
    if(req.url.indexOf('/index.html')!==-1) {
        res.end(index);
    } else {
        res.end('ok');
    }
    // res.end('server');
});

server.on('connection', (socket) => {
    console.log('new connection');
});

// server.on('listening', () => {
//     console.log(server._handle);

//     var handle = server._handle;
//     var server2 = http.createServer((req, res) => {
//         res.end('server 2');
//     });
//     server2.listen(handle);
// });

server.listen(3131);