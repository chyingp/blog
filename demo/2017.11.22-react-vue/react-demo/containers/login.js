// app.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from 'react-weui';
// //import styles
// import 'weui';
// import 'react-weui/build/packages/react-weui.css';

// const App = () => <Button>hello wechat</Button>;

// ReactDOM.render((
//     <App/>
// ), document.getElementById('container'));

import { connect } from 'react-redux'
import { login } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => ({
	...state.code,
	categories: state.categories
})

const mapDispatchToProps =  ({
	login: login
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Login)