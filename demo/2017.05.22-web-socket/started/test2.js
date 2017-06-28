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

var server = net.createServer((socket) => { 
    console.log('hello');

    let chunks = [];
    
    socket.on('data', chunk => {
        chunks.push(chunk);
    });

    socket.on('end', () => {
        console.log(chunks);
    })
});

// server.on('connection', (socket) => {
//     console.log('new connection');
// });

server.listen(3131);