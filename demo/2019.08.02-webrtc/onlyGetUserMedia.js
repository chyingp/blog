var gotStreamSucc = function(stream) {    
    document.getElementById('video').srcObject = stream;              
};

var gotStreamErr = function(error) {
    console.error(error);
};

var conf = {video: true, audio: false};
navigator.getUserMedia(conf, gotStreamSucc, gotStreamErr);