const socket = io.connect('http://localhost:3000');

const CLIENT_RTC_EVENT = 'CLIENT_RTC_EVENT';
const SERVER_RTC_EVENT = 'SERVER_RTC_EVENT';

const CLIENT_USER_EVENT = 'CLIENT_USER_EVENT';
const SERVER_USER_EVENT = 'SERVER_USER_EVENT';

const CLIENT_USER_EVENT_LOGIN = 'CLIENT_USER_EVENT_LOGIN'; // 登录
// const CLIENT_USER_EVENT_START_TALK = 'CLIENT_USER_EVENT_START_TALK'; // 开启视频聊天

const SERVER_USER_EVENT_UPDATE_USERS = 'SERVER_USER_EVENT_UPDATE_USERS';

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
    log('ws connect.');
});

socket.on('connect_error', function() {
    log('ws connect_error.');
});

socket.on('error', function(errorMessage) {
    log('ws error, ' + errorMessage);
});

socket.on(SERVER_USER_EVENT, function(msg) {
    const type = msg.type;
    const payload = msg.payload;

    switch(type) {
        case SERVER_USER_EVENT_UPDATE_USERS:
            updateUserList(payload);
            break;
    }
    log(`[${SERVER_USER_EVENT}] [${type}], ${JSON.stringify(msg)}`);
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
    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
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
 * 发送用户相关消息给服务器
 * @param {Object} msg 格式如 { type: 'xx', payload: {} }
 */
function sendUserEvent(msg) {
    socket.emit(CLIENT_USER_EVENT, JSON.stringify(msg));
}

/**
 * 发送RTC相关消息给服务器
 * @param {Object} msg 格式如{ type: 'xx', payload: {} }
 */
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
        audio: false
    };
    
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    localVideo.srcObject = mediaStream;

    // 创建 peerConnection
    createPeerConnection();
    
    pc.addStream(mediaStream);
}

function createPeerConnection(mediaStream) {
    const iceConfig = {"iceServers": [
        {url: 'stun:stun.ekiga.net'},
        {url: 'turn:turnserver.com', username: 'user', credential: 'pass'}
    ]};
    
    pc = new RTCPeerConnection(iceConfig);
    
    // if (mediaStream) {
    //     pc.addStream(mediaStream);
    // }

    pc.onnegotiationneeded = onnegotiationneeded;
    pc.onicecandidate = onicecandidate;
    pc.onicegatheringstatechange = onicegatheringstatechange;
    pc.oniceconnectionstatechange = oniceconnectionstatechange;
    pc.onsignalingstatechange = onsignalingstatechange;
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

function onicegatheringstatechange(evt) {
    log(`onicegatheringstatechange, pc.iceGatheringState is ${pc.iceGatheringState}.`);
}

function oniceconnectionstatechange(evt) {
    log(`oniceconnectionstatechange, pc.iceConnectionState is ${pc.iceConnectionState}.`);
}

function onsignalingstatechange(evt) {
    log(`onsignalingstatechange, pc.signalingstate is ${pc.signalingstate}.`);
}

let times = 0;
function ontrack(evt) {
    // times++;
    // if (times === 2) {
    //     log(`ontrack.`);
    //     const remoteVideo = document.getElementById('remote-video');
    //     remoteVideo.srcObject = evt.streams[0];
    // };
    log(`ontrack.`);
    const remoteVideo = document.getElementById('remote-video');
    remoteVideo.srcObject = evt.streams[0];
}

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