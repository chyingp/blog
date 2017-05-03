// 参考：https://community.risingstack.com/using-buffers-node-js-c-plus-plus/
// 参考：https://github.com/nodejs/node-addon-examples
var protobuf = require('protobufjs');
var net = require('net');
var checksum = require('node-checksum');

var pad = function(num, byteSize){
    var binaryStr = (num).toString(2);
    var binaryLen = binaryStr.length;
    var bytesTotal = Math.ceil(binaryLen/8);
    var buff = Buffer.alloc(byteSize, 0);
    // var buff2 = Buffer.alloc(byteSize, 0);

    var arr = [];
    var reversedStr = binaryStr.split('').reverse().join('');
    var start;
    var end;
    var i;
    
    for(var i = 0; i < bytesTotal; i++){
        start = 0 + i * 8;
        end = start + 8;
        arr.unshift( reversedStr.slice(start, end).split('').reverse().join('') );
    }

    for(var i = bytesTotal - 1, j = buff.length - 1; i >=0; i--, j--){
        buff[j] = parseInt(arr[i], 2);
    }
    // buff2[0] = buff[3];
    // buff2[1] = buff[2];
    // buff2[2] = buff[1];
    // buff2[3] = buff[0];

    return buff;
};

var hton = function(buff){    
    var len = buff.length;
    var ret = Buffer.alloc(len, 0);
    
    for(var i = 0; i < len; i++){
        ret[i] = buff[len - i - 1];
    }

    return ret;
};

var getYuanMa = function(num){
    var binaryStr = (-num).toString(2);
    var len = binaryStr.length;
    
    var arr = new Array(32);
    arr.fill(0);

    for(var i = len - 1, j = arr.length - 1; i >= 0; i--, j--){
        arr[j] = binaryStr.charAt(i);
    }

    return arr;
};

var getFanma = function(arr){

    arr = arr.map(function(n){
        return n === '1' ? 0 : 1;
    });

    return arr;
};

var getBuma = function(arr){
    var go = true;
    var result;
    for(var len = arr.length, i = len -1; i >=0; i--){
        result = arr[i] + (go ? 1 : 0);
        
        if(result > 1){
            go = true;
            arr[i] = 0;
        }else{
            go = false;
            arr[i] = result;
        }
    }
    return arr;
};

var getFu = function(num){
    // var num = -18;
    var yuanma = getYuanMa(num);
    var fanma = getFanma(yuanma);
    var result = getBuma(fanma);

    return result;
};

var getTail = function(bodyChecksum, byteSize){
    var list = getFu(bodyChecksum);
    var subList;
    var start;
    var end;
    var buff = Buffer.alloc(4, 0);

    for(var i = 0; i < 4; i++){
        start = i * 8;
        end = start + 8;
        subList = list.slice(start, end);
        buff[i] = parseInt(subList.join(''), 2);
    }

    return buff;
};

var run = function(){
    var protoName = 'Front.Trade.Proto.Message.proto';
    
    protobuf.load(protoName, function(err, root) {
        if (err) throw err;

        console.log('loaded successfully !');

        // Obtain a message type
        // var AwesomeMessage = root.lookup('Front.Trade.Proto.ReqUserLogin');
        var AwesomeMessage = root.lookup('Front.Trade.Proto.ReqUserLogin');
        // Create a new message
        
        var userLogin = {
            reqType: 10,
            loginName: "15919725262",
            loginPasswd: 'e10adc3949ba59abbe56e057f20f883e',
            clientType: 1,
            clientInfo: 'letv1',
            clientIp: '192.168.1.1'
        };
       
        // var message = AwesomeMessage.create({
        //     reqType: 10,
        //     loginName: "15919725262",
        //     loginPasswd: 'e10adc3949ba59abbe56e057f20f883e',
        //     clientType: 1,
        //     clientInfo: 'letv1',
        //     clientIp: '192.168.1.1'
        // });

        
        var AwesomeMessage2 = root.lookup('Front.Trade.Proto.ReqMessage');
        var message2 = AwesomeMessage2.create({
            reqType: 10,
            reqUserLogin: userLogin
        });

        // message.reqType = AwesomeMessage.fields.reqType.resolvedType.values.EReqType_FrontTrade_UserLogin;
        // message.login_name = 'jeff@microption.com.cn';
        // message.login_passwd = '123456';

        // var reqType = AwesomeMessage.fields.reqType.resolvedType.values.EReqType_FrontTrade_UserLogin;

        // var params = { 
        //     req_type: reqType,
        //     login_name: 'jeff@microption.com.cn',
        //     login_passwd: '123456'            
        // };

        // var buffer = AwesomeMessage.encode(userLogin).finish();  // 包体
        var buffer = AwesomeMessage2.encode(message2).finish();  // 包体

        // console.log( buffer.toString() );

        // return;

        var len = buffer.length;

        console.log('buffer.length: ' + len);

        var lenBuff1 = pad(len, 4);  // header
        var lenBuff2 = pad(len, 4);

        var bodyChecksum = checksum.cal(buffer, len);  // tail

        // console.log('checksum is: ' + bodyChecksum);
        
        var tailBuff = getTail(bodyChecksum, 4);
        
        var totalBuff = Buffer.concat([ hton(lenBuff1), hton(lenBuff2), buffer, hton(tailBuff) ]);

        console.log(totalBuff.length);
        
        // return;

        var host = '192.168.1.27';
        var port = '9001';
        
        var client = net.createConnection(port, host);

        client.on('connect', function(){
            console.log('客户端：已经与服务端建立连接');
        });

        client.on('data', function(resBuffer){
            var resBuffLen = resBuffer.length;
            var protoLen = resBuffer[0];
            var protoBuff;
            var msg;
            if(protoLen !== 0){
                protoBuff = resBuffer.slice(8, 8 + protoLen);                
                msg = AwesomeMessage2.decode(protoBuff);
                console.log('客户端：收到服务端数据，内容为{ '+ JSON.stringify(msg) +' }');
            }else{
                // console.log('客户端：收到服务端数据，内容为{'+ len +'}');
            }            
        });

        client.on('close', function(data){
            console.log('客户端：连接断开');
        });

        client.on('end', function(){
            console.log('on end'); 
        })

        client.on('error', function(error){
            console.log('error occured: ' + error.message);
        });
        
        client.write(totalBuff);


        // Encode a message
        // var buffer = AwesomeMessage.encode(message).finish();
        // ... do something with buffer

        // Or, encode a plain object
        // var buffer = AwesomeMessage.encode({ awesomeField: "AwesomeString" }).finish();
        // ... do something with buffer

        // Decode a buffer
        // var message = AwesomeMessage.decode(buffer);
        // ... do something with message

        // If your application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.
        // var m = AwesomeMessage.decode(buffer);
        // console.log(m);
    });
};

// const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
// const size = buf.length;

// console.log( checksum.cal(buf, size) ); // 'world'

// console.log( getFu(-18) )
// console.log( pad(65536, 4) );

run();
// 
// console.log( pad(75, 4) );