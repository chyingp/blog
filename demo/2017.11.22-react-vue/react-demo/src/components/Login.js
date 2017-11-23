import { Button } from 'react-weui';

import React from 'react'

class Login extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {}
    this.onLogin = this.onLogin.bind(this)
  }

  onLogin () {
    console.log( this.props.loginAsync() )
  }

  render () {
    return (
      <div>
        <Button type="primary" onClick={this.onLogin}>登录</Button>
      </div>
    )
  }
}

export default Login