import React from 'react'
import { Route } from 'react-router'
import Login from '../containers/Login'
import Reg from '../containers/Reg'

class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {}
    this.gotoLogin = this.gotoLogin.bind(this)
    this.gotoReg = this.gotoReg.bind(this)
    this.gotoInquiry = this.gotoInquiry.bind(this)    
  }

  gotoLogin () {
    this.props.history.push( this.createPath('login') )
  }

  gotoReg() {
    this.props.history.push( this.createPath('reg') )
  }

  gotoInquiry () {
    this.props.history.push( this.createPath('inquiry') )
  }

  /**
   * 根据传入的subpath，生成对应的path
   * 举例：当前页面地址为 http://dev-kh.inquiry.local/oc/kh-m/ins/0055/page/app.html
   * location.path => /oc/kh-m/ins/0055/page/app.html
   * createPath('/login') => /oc/kh-m/ins/0055/page/login
   * 
   * @param {string} subpath 
   */
  createPath (subpath) {
    // http://dev-kh.inquiry.local/oc/kh-m/ins/0055/page/app.html
    return location.pathname.replace(/page\/.+$/, 'page/' + subpath);
  }

  render () {
    return (
      <div>
					<a href="javascript:void(0)" onClick={this.gotoLogin}>登录</a>
			    <a href="javascript:void(0)" onClick={this.gotoReg}>注册</a>
          <a href="javascript:void(0)" onClick={this.gotoInquiry}>询价</a>
					<Route path="/login" component={Login}/>
					<Route path="/reg" component={Reg}/>
      </div>
    )
  }
}

export default App