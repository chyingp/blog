const express = require('express');
const app = express();

const realms = [
  { realm: 'protected_docs', path: '/protected_docs', users: ['chyingp'] }
];

const users = [
  { usrname: 'chyingp', passwd: '123456' }
];

// 检查资源路径对应的realm，比如 path:'/protected_docs' => realm:'protected_docs'
function findRealm (path) {
  return realms.find(item => path.indexOf(item.path) !== -1);
}

// 根据用户名、密码，查找用户
function findUser (usrname, passwd) {
  return users.find(user => user.usrname === usrname && user.passwd === passwd);
}

// 判断用户是否在realm里
function isUserInRealm (realmItem, usrname) {
  return realmItem.users.indexOf(usrname) !== -1;
}

function notAuthorized (res) {  
  res.status = 403;
  res.end();
}

const protectedPath = '/protected_docs';

app.get(protectedPath, (req, res, next) => {
  
  const realmItem = findRealm(protectedPath);
  const realm = realmItem.realm; // 这里是 protected_docs
  const authorization = req.get('authorization');

  if (authorization) { // 身份认证
    
    const usernamePasswd = authorization.split(' ')[1]; // Basic Y2h5aW5ncDoxMjM0NTY
    const [usrname, passwd] = Buffer.from(usernamePasswd, 'base64').toString().split(':');
    
    if (isUserInRealm(realmItem, usrname) === false) { // 用户不在realm里
      return notAuthorized(res);
    }

    const user = findUser(usrname, passwd);

    if (!user) { // 用户账号、密码验证不通过
      return notAuthorized(res);
    }

    res.end(`welecom ${usrname}`);

  } else { // 告知用户需要身份认证

    res.statusCode = 401;
    res.set('WWW-Authenticate', 'Basic realm=' + encodeURIComponent(realm));
    res.end();
  }  
});

app.listen(3004);