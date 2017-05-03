var protobuf = require('protobufjs');

var run = function(){
    protobuf.load("awesome.proto", function(err, root) {
        if (err) throw err;

        // Obtain a message type
        var AwesomeMessage = root.lookup("awesomepackage.AwesomeMessage");

        // Create a new message
        var message = AwesomeMessage.create({ awesomeField: "AwesomeString" });

        // Encode a message
        var buffer = AwesomeMessage.encode(message).finish();
        // ... do something with buffer

        console.log( buffer );

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

var run2 = function(){
    var protoName = 'Front.Trade.Proto.Message.proto';
    protobuf.load(protoName, function(err, root){
        if (err) throw err;

        console.log('loaded successfully!');
    });
};

run();