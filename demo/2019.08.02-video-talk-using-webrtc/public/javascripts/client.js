const socket = io.connect('http://localhost:3000');

const EVENT_LOGIN = 'EVENT_LOGIN';
// const EVENT_LOGIN = 'EVENT_LOGIN';
const EVENT_UPDATE_USERS = 'EVENT_UPDATE_USERS';

const onlineUsers = [];

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

/**
 * 用户登录
 * @param {String} name 用户名
 */
function login(name) {
    sendToSignalingServer({
        type: EVENT_LOGIN,
        payload: {
            name: name
        }
    });
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
        li.innerHTML = user.name;
        li.setAttribute('data-name', user.name);
        li.addEventListener('click', handleUserClick);
        fragment.appendChild(li);
    });    
    
    userList.appendChild(fragment);
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

// 点击用户列表
function handleUserClick(evt) {
    const target = evt.target;
    const name = target.getAttribute('data-name');
    log(`online user selected: ${name}`);    
}

function init() {
    document.getElementById('login-btn').addEventListener('click', handleLogin);
}

init();