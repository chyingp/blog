var pc = new RTCPeerConnection({});

var onnegotiationneeded = function() {
    console.log(`onnegotiationneeded is triggered.`);
};

var gotStreamSucc = function(stream) {
    pc.addStream(stream); // 这里会触发 onnegotiationneeded 
};

var gotStreamErr = function(error) {
    console.error(error);
};

pc.onnegotiationneeded = onnegotiationneeded;

var conf = {video: true, audio: false};
navigator.getUserMedia(conf, gotStreamSucc, gotStreamErr);