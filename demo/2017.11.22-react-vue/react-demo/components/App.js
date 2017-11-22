import React from 'react'
import { Route } from 'react-router'
import Login from '../containers/Login'
import Reg from '../containers/Reg'

class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {}
    this.goToLogin = this.goToLogin.bind(this)
    this.goToReg = this.goToReg.bind(this)
  }

  goToLogin () {
    this.props.history.push('/login')
  }

  goToReg() {
    this.props.history.push('/reg')
  }

  render () {
    return (
      <div>
					<a href="javascript:void(0)" onClick={this.goToLogin}>登录</a>
			    <a href="javascript:void(0)" onClick={this.goToReg}>注册</a>
					<Route path="/login" component={Login}/>
					<Route path="/reg" component={Reg}/>
      </div>
    )
  }
}

export default App