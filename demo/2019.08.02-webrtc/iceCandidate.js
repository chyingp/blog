var ice = {"iceServers": [
    {url: 'stun:stun.ekiga.net'},
    {"url": "turn:turnserver.com", "username": "user", "credential": "pass"}
]};
var pc;
var iceCandidateTimes = 0;

var onCreateOfferSucc = function(offer) {
    pc.setLocalDescription(offer);
};

var onCreateOfferErr = function(error) {
    console.error(error);
};

var onnegotiationneeded = function() {
    console.log(`onnegotiationneeded is triggered.`);
};

var onsignalingstatechange = function(evt) {
    console.log(`pc.signalingStateChange is ${pc.signalingState}`);
};

var onicecandidate = function() {
    console.log(`pc.iceGatheringState is ${pc.iceGatheringState} for ${++iceCandidateTimes}`);
};

var gotStreamSucc = function(stream) {
    pc = new RTCPeerConnection(ice);
    pc.addStream(stream); // 触发onnegotiationneeded
    pc.onsignalingstatechange = onsignalingstatechange; // pc.setLocalDescription(offer)调用时触发
    pc.onicecandidate = onicecandidate; // pc.addStream(stream)、pc.setLocalDescription(offer)都调用后触发
    pc.onnegotiationneeded = onnegotiationneeded;
    pc.createOffer()
        .then(onCreateOfferSucc)
        .catch(onCreateOfferErr);             
};

var gotStreamErr = function(error) {
    console.error(error);
};

var conf = {video: true, audio: false};
navigator.getUserMedia(conf, gotStreamSucc, gotStreamErr);

// 日志输出如下
// onnegotiationneeded is triggered.
// pc.signalingStateChange is have-local-offer
// pc.iceGatheringState is gathering for 1
// pc.iceGatheringState is gathering for 2
// pc.iceGatheringState is gathering for 3
// pc.iceGatheringState is gathering for 4
// pc.iceGatheringState is gathering for 5
// pc.iceGatheringState is complete for 6