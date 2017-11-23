import { React } from 'react'


function getLogin () {
  return import(/* webpackChunkName: "login" */ './login').then(Login => {})
}

getLogin().then(() => {
  console.log('app')
})