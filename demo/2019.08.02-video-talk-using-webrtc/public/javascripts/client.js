const socket = io.connect('http://localhost:3000');

const CLIENT_RTC_EVENT = 'CLIENT_RTC_EVENT';
const CLIENT_USER_EVENT = 'CLIENT_USER_EVENT';

const CLIENT_USER_EVENT_LOGIN = 'CLIENT_USER_EVENT_LOGIN';
const EVENT_UPDATE_USERS = 'EVENT_UPDATE_USERS';

const SIGNALING_OFFER = 'SIGNALING_OFFER';
const SIGNALING_ANSWER = 'SIGNALING_ANSWER';
const SIGNALING_CANDIDATE = 'SIGNALING_CANDIDATE';

const onlineUsers = [];
let remoteUser = ''; // ...

function log(msg) {
    console.log(`[client] ${msg}`);
}

socket.on('connect', function(){
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

function sendRTCEvent(msg){
    socket.emit(CLIENT_RTC_EVENT, JSON.stringify(msg));
}

let pc = null;

/**
 * 邀请用户加入视频聊天
 * @param {String} userName 用户名
 */
async function invite(userName) {
    // 发起邀请

    // 开启本地视频
    const localVideo = document.getElementById('local-video');
    const constraints = {
        video: true, 
        audio: true
    };
    
    const mediaStram = await navigator.mediaDevices.getUserMedia(constraints);
    localVideo.srcObject = mediaStram;

    const iceConfig = {"iceServers": [
        {url: 'stun:stun.ekiga.net'},
        {"url": "turn:turnserver.com", "username": "user", "credential": "pass"}
    ]};
    
    pc = new RTCPeerConnection(iceConfig);        
    mediaStream.getTracks().forEach(track => {
        pc.addTransceiver(track);
    });

    pc.onnegotiationneeded = onnegotiationneeded;
    pc.onicecandidate = onicecandidate;
    pc.ontrack = ontrack;
}

function onicecandidate(evt) {
    if (evt.candidate) {
        log(`onicecandidate.`);

        sendRTCEvent({
            type: SIGNALING_CANDIDATE,            
            payload: {
                target: remoteUser,
                candidate: evt.candidate
            }
        });
    }
}

function ontrack() {}

async function onnegotiationneeded() {
    log(`onnegotiationneeded.`);

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer); // TODO 错误处理

    socket.emit({
        type: SIGNALING_OFFER,
        payload: offer
    });
}

function onCreateOfferSucc(offer) {
    pc.setLocalDescription(offer);
}

function onCreateOfferErr(error) {
    console.error(error);
}

function onsignalingstatechange(evt) {
    console.log(`pc.signalingStateChange is ${pc.signalingState}`);
};

function onicecandidate() {
    console.log(`pc.iceGatheringState is ${pc.iceGatheringState} for ${++iceCandidateTimes}`);
};


// 点击用户列表
function handleUserClick(evt) {
    const target = evt.target;
    const userName = target.getAttribute('data-name').trim();
    remoteUser = userName;
    log(`online user selected: ${userName}`);    
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