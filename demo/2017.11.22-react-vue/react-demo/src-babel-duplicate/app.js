
import(/* webpackChunkName: "reg" */ './reg').then(() => console.log('reg loaded'))
import(/* webpackChunkName: "login" */ './login').then(() => console.log('login loaded'))

console.log('app');