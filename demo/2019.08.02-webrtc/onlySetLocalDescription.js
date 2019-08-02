var pc = new RTCPeerConnection({});

var onCreateOfferSucc = function(offer) {
    pc.setLocalDescription(offer);
};

var onCreateOfferErr = function(error) {
    console.error(error);
};

var onSignalingStateChange = function(evt) {
    console.log(`pc.signalingStateChange is ${pc.signalingState}`);
};

pc.onsignalingstatechange = onSignalingStateChange;
pc.createOffer()
    .then(onCreateOfferSucc)
    .catch(onCreateOfferErr);