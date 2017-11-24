import { React } from 'react'


function getLogin () {
  return import(/* webpackChunkName: "login" */ './login').then(Login => {})
}

function getReg () {
  return import(/* webpackChunkName: "./containers/reg" */ './containers/reg').then(Reg => {})
}

getLogin().then(() => {
  console.log('login: app')
})

getReg().then(() => {
  console.log('reg: app')
})