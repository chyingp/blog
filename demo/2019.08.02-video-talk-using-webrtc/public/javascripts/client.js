const socket = io.connect('http://localhost:3000');

const CLIENT_RTC_EVENT = 'CLIENT_RTC_EVENT';
const SERVER_RTC_EVENT = 'SERVER_RTC_EVENT';
const CLIENT_USER_EVENT = 'CLIENT_USER_EVENT';

const CLIENT_USER_EVENT_LOGIN = 'CLIENT_USER_EVENT_LOGIN'; // 登录
const CLIENT_USER_EVENT_START_TALK = 'CLIENT_USER_EVENT_START_TALK'; // 开启视频聊天
const EVENT_UPDATE_USERS = 'EVENT_UPDATE_USERS';

const SIGNALING_OFFER = 'SIGNALING_OFFER';
const SIGNALING_ANSWER = 'SIGNALING_ANSWER';
const SIGNALING_CANDIDATE = 'SIGNALING_CANDIDATE';

const onlineUsers = [];
let remoteUser = ''; // ...
let localUser = ''; // ..

function log(msg) {
    console.log(`[client] ${msg}`);
}

socket.on('connect', function() {
    log('[connect]');
});

socket.on('connect_error', function() {
    log('[connect_error]');
});

socket.on('error', function(errorMessage) {
    log('[error], ' + errorMessage);
});

socket.on('server_event', function(msg) {
    const type = msg.type;
    const payload = msg.payload;

    switch(type) {
        case EVENT_UPDATE_USERS:
            updateUserList(payload);
            break;
    }
    log(`server_event, ${JSON.stringify(msg)}`);
});

socket.on(SERVER_RTC_EVENT, function(msg) {
    const {type, payload} = msg;

    switch(type) {
        case SIGNALING_OFFER:
            handleReceiveOffer(msg);
            break;
        case SIGNALING_ANSWER:
            handleReceiveAnswer(msg);
            break;
        case SIGNALING_CANDIDATE:
            handleReceiveCandidate(msg);
            break;
    }
});

async function handleReceiveOffer(msg) {
    log(`receive remote description from ${msg.payload.from}`);
    
    // 设置远端描述
    const remoteDescription = new RTCSessionDescription(msg.payload.sdp);
    remoteUser = msg.payload.from;
    createPeerConnection();
    await pc.setRemoteDescription(remoteDescription); // TODO 错误处理

    // 本地音视频采集
    const localVideo = document.getElementById('local-video');
    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = mediaStream;
    mediaStream.getTracks().forEach(track => {
        pc.addTrack(track, mediaStream);
    });

    const answer = await pc.createAnswer(); // TODO 错误处理
    await pc.setLocalDescription(answer);
    sendRTCEvent({
        type: SIGNALING_ANSWER,
        payload: {
            sdp: answer,
            from: localUser,
            target: remoteUser
        }
    });
}

async function handleReceiveAnswer(msg) {
    log(`receive remote answer from ${msg.payload.from}`);
    
    const remoteDescription = new RTCSessionDescription(msg.payload.sdp);
    remoteUser = msg.payload.from;

    await pc.setRemoteDescription(remoteDescription); // TODO 错误处理
}

async function handleReceiveCandidate(msg){
    log(`receive candidate from ${msg.payload.from}`);
    await pc.addIceCandidate(msg.payload.candidate); // TODO 错误处理
}

/**
 * 发送消息给信令服务器
 * @param {Object} msg 信令服务器 { type: 'xx', payload: {} }
 */
function sendToSignalingServer(msg) {
    socket.emit('client_event', JSON.stringify(msg));
}

function sendUserEvent(msg) {
    socket.emit(CLIENT_USER_EVENT, JSON.stringify(msg));
}

function sendRTCEvent(msg) {
    socket.emit(CLIENT_RTC_EVENT, JSON.stringify(msg));
}

let pc = null;

/**
 * 邀请用户加入视频聊天
 *  1、本地启动视频采集
 *  2、交换信令
 */
async function startVideoTalk() {
    // 开启本地视频
    const localVideo = document.getElementById('local-video');
    const constraints = {
        video: true, 
        audio: true
    };
    
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    localVideo.srcObject = mediaStream;

    // 创建 peerConnection
    createPeerConnection();

    mediaStream.getTracks().forEach(track => {
        // pc.addTransceiver(track, { streams: [mediaStream]});
        pc.addTrack(track, mediaStream);
    });
}

function createPeerConnection() {
    const iceConfig = {"iceServers": [
        {url: 'stun:stun.ekiga.net'},
        {url: 'turn:turnserver.com', username: 'user', credential: 'pass'}
    ]};
    
    pc = new RTCPeerConnection(iceConfig);        

    pc.onnegotiationneeded = onnegotiationneeded;
    pc.onicecandidate = onicecandidate;
    pc.oniceconnectionstatechange = oniceconnectionstatechange;
    pc.ontrack = ontrack;
    
    return pc;
}

async function onnegotiationneeded() {
    log(`onnegotiationneeded.`);

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer); // TODO 错误处理

    sendRTCEvent({
        type: SIGNALING_OFFER,
        payload: {
            from: localUser,
            target: remoteUser,
            sdp: pc.localDescription // TODO 直接用offer？
        }
    });
}

function onicecandidate(evt) {
    if (evt.candidate) {
        log(`onicecandidate.`);

        sendRTCEvent({
            type: SIGNALING_CANDIDATE,            
            payload: {
                from: localUser,
                target: remoteUser,
                candidate: evt.candidate
            }
        });
    }
}

function oniceconnectionstatechange(evt) {
    log(`oniceconnectionstatechange, iceConnectionState is ${pc.iceConnectionState}`);
}

function ontrack(evt) {
    const remoteVideo = document.getElementById('remote-video');
    remoteVideo.srcObject = evt.streams[0];
}

function onCreateOfferSucc(offer) {
    pc.setLocalDescription(offer);
}

function onCreateOfferErr(error) {
    console.error(error);
}

function onsignalingstatechange(evt) {
    // console.log(`pc.signalingStateChange is ${pc.signalingState}`);
};

function onicecandidate() {
    // console.log(`pc.iceGatheringState is ${pc.iceGatheringState} for ${++iceCandidateTimes}`);
};

// 点击用户列表
async function handleUserClick(evt) {
    const target = evt.target;
    const userName = target.getAttribute('data-name').trim();

    if (userName === localUser) {
        alert('不能跟自己进行视频会话');
        return;
    }

    log(`online user selected: ${userName}`);

    remoteUser = userName;
    await startVideoTalk(remoteUser);
}

/**
 * 更新用户列表
 * @param {Array} users 用户列表，比如 [{name: '小明', name: '小强'}]
 */
function updateUserList(users) {
    const fragment = document.createDocumentFragment();
    const userList = document.getElementById('login-users');
    userList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = user.userName;
        li.setAttribute('data-name', user.userName);
        li.addEventListener('click', handleUserClick);
        fragment.appendChild(li);
    });    
    
    userList.appendChild(fragment);
}

/**
 * 用户登录
 * @param {String} loginName 用户名
 */
function login(loginName) {
    localUser = loginName;
    sendUserEvent({
        type: CLIENT_USER_EVENT_LOGIN,
        payload: {
            loginName: loginName
        }
    });
}

// 处理登录
function handleLogin(evt) {
    let loginName = document.getElementById('login-name').value.trim();
    if (loginName === '') {
        alert('用户名为空！');
        return;
    }
    login(loginName);
}

function init() {
    document.getElementById('login-btn').addEventListener('click', handleLogin);
}

init();