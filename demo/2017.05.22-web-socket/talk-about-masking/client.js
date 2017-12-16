var net = require('net');

// var PORT = 8989;
// var HOST = '127.0.0.1';
// var PORT = 80;
// var HOST = '174.129.224.73';

var PORT = 2323;
var HOST = '127.0.0.1';

var isUpgraded = false;

// tcp客户端
var client = net.createConnection(PORT, HOST);

client.on('connect', function(){
    console.log('客户端：已经与服务端建立连接');
    var message = formatMessage(upgradeMessage);
    client.write(message);
    // var message = formatMessage(staticMessage);
    // client.write(message);
});

client.on('data', function(data){
    console.log('客户端：收到服务端数据，内容为{'+ data +'}');
    // if(isUpgraded) return;
    // var message = formatMessage(staticMessage);
    // client.write(message);
    // isUpgraded = true;
});

client.on('close', function(data){
    console.log('客户端：连接断开');
});

client.on('error', function (error) {
  console.log(error.message);
});

// client.end('你好，我是客户端');

var upgradeMessage = `GET / HTTP/1.1
Host:echo.websocket.org
Origin:http://www.ruanyifeng.com
Upgrade:websocket
Connection:Upgrade
Sec-WebSocket-Key:d1wzenBjQzXoF3WCmBp8hw==
Sec-WebSocket-Version:13

`;

var staticMessage = `GET /css/skins/orange.css HTTP/1.1
Host: www.websocket.org
Pragma: no-cache
Cache-Control: no-cache
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36
Accept: text/css,*/*;q=0.1
Referer: http://www.websocket.org/index.html
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4
Cookie: _ga=GA1.2.1644507643.1508666470; _gid=GA1.2.1089074837.1508666470; _gat=1; __zlcmid=j7gq5gwHlA26nU

`;

var formatMessage = function (message) {
  return message.replace(/\n/g, '\r\n');
};

// 客户端->服务端：升级请求（upgrade）
// 服务端->客户端：同意升级请求