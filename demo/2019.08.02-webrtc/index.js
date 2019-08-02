var ice = {"iceServers": [
    // {"url": "stun:stunserver.com:12345"},
    {url: 'stun:stun.ekiga.net'},
    {"url": "turn:turnserver.com", "username": "user", "credential": "pass"}
]};
// var pc = new RTCPeerConnection(ice);
var pc;

var onCreateOfferSucc = function(offer) {
    pc.setLocalDescription(offer);
};

var onCreateOfferErr = function(error) {
    console.error(error);
};

var gotStreamSucc = function(stream) {    
    document.getElementById('video').srcObject = stream;
    
    pc = new RTCPeerConnection(ice);
    // pc.addStream(stream);

    pc.createOffer()
        .then(onCreateOfferSucc)
        .catch(onCreateOfferErr);

    return;

    
    

    pc.onicecandidate = function(evt) {
        console.log(evt.candidate);
    };                
};

var gotStreamErr = function(stream) {
    // document.getElementById('video').srcObject = stream;
    console.error('gotStreamError');
};

var conf = {video: true, audio: false};
navigator.getUserMedia(conf, gotStreamSucc, gotStreamErr);