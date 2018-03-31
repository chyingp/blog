const express = require('express');
const app = express();

const users = [
  { usrname: 'chyingp', passwd: '123456' }
];

function findUser (usrname, passwd) {
  return users.find(user => user.usrname === usrname && user.passwd === passwd);
}

app.get('/user_profile', (req, res, next) => {
  
  const realm = 'user_profile';
  const authorization = req.get('authorization');

  if (authorization) {
    const usernamePasswd = authorization.split(' ')[1]; // Basic Y2h5aW5ncDoxMjM0NTY
    const [usrname, passwd] = Buffer.from(usernamePasswd, 'base64').toString().split(':');
    const user = findUser(usrname, passwd);
    res.end(user ? `welecom ${usrname}.` : 'user not found.');
  } else {
    res.statusCode = 401;
    res.set('WWW-Authenticate', 'Basic realm=' + encodeURIComponent(realm));
    res.end();
  }  
});

app.listen(3002);