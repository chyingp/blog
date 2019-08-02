// var ice = {"iceServers": [
//     // {"url": "stun:stunserver.com:12345"},
//     {url: 'stun:stun.ekiga.net'},
//     {"url": "turn:turnserver.com", "username": "user", "credential": "pass"}
// ]};
var ice = {};
var pc;

var onCreateOfferSucc = function(offer) {
    pc.setLocalDescription(offer);
};

var onCreateOfferErr = function(error) {
    console.error(error);
};

var onSignalingStateChange = function(evt) {
    console.log(`pc.signalingStateChange is ${pc.signalingState}`);
};

var onIceCandidate = function() {
    console.log(`pc.iceGatheringState is ${pc.iceGatheringState}`);
};

var gotStreamSucc = function(stream) {    
    // document.getElementById('video').srcObject = stream;
    
    pc = new RTCPeerConnection(ice);
    pc.addStream(stream);
    return;
    

    pc.onsignalingstatechange = onSignalingStateChange;
    pc.onicecandidate = onIceCandidate;
    pc.createOffer()
        .then(onCreateOfferSucc)
        .catch(onCreateOfferErr);

    pc.onicecandidate = function(evt) {
        console.log(evt.candidate);
    };                
};

var gotStreamErr = function(error) {
    console.error(error);
};

var conf = {video: true, audio: false};
navigator.getUserMedia(conf, gotStreamSucc, gotStreamErr);