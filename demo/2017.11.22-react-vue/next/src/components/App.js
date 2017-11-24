import React from 'react'
import { Route } from 'react-router'
import Bundle from './Bundle'

const Reg = (props) => (
  <Bundle load={() => import(/* webpackChunkName: "reg" */ '../containers/Reg')}>
    {(Reg) => <Reg {...props}/>}
  </Bundle>
)

const Login = (props) => (
  <Bundle load={() => import(/* webpackChunkName: "login" */ '../containers/Login')}>
    {(Login) => <Login {...props}/>}
  </Bundle>
)

class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {}
    this.gotoLogin = this.gotoLogin.bind(this)
    this.gotoReg = this.gotoReg.bind(this)
    this.gotoInquiry = this.gotoInquiry.bind(this)    
  }

  gotoLogin () {
    this.props.history.push( this.getLoginPath() )
  }

  getLoginPath () {
    return this.createPath('login.html')
  }

  gotoReg() {
    this.props.history.push( this.getRegPath() )
  }

  getRegPath () {
    return this.createPath('reg.html')
  }

  gotoInquiry () {
    this.props.history.push( this.createPath('inquiry.html') )
  }

  getInquiryPath () {
    return this.createPath('inquiry.html')
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

  renderAsyncComponent () {
    // return React.createElement(Reg);

  }

  render () {
    return (
      <div>
					<a href="javascript:void(0)" onClick={this.gotoLogin}>登录</a>
			    <a href="javascript:void(0)" onClick={this.gotoReg}>注册</a>
          <a href="javascript:void(0)" onClick={this.gotoInquiry}>询价</a>
					<Route path={this.getLoginPath()} component={Login}/>
          <Route path={this.getRegPath()} component={Reg}/>
          {/* <Route path={this.getRegPath()} render={this.renderAsyncComponent.bind(this, './reg')}/> */}
          {/* <Route path={this.getInquiryPath()} render={this.renderAsyncComponent.bind(this, '')} /> */}
      </div>
    )
  }
}

export default App