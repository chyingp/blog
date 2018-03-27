var parser = require('socket.io-parser');
var encoder = new parser.Encoder();
var packet = {
  type: parser.EVENT,
  data: 'test-packet',
  id: 13
};
encoder.encode(packet, function(encodedPackets) {
  var decoder = new parser.Decoder();
  decoder.on('decoded', function(decodedPacket) {
    // decodedPacket.type == parser.EVENT
    // decodedPacket.data == 'test-packet'
    // decodedPacket.id == 13
  });

  for (var i = 0; i < encodedPackets.length; i++) {
    decoder.add(encodedPackets[i]);
  }
});