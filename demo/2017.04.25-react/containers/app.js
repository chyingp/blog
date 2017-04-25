import React from 'react';
import {render} from 'react-dom';
import { queryHelp } from '../actions'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducers from '../reducers';
import { Provider, connect } from 'react-redux'
import Home from './Home';

class App extends React.Component {
	
	constructor (props) {
		super(props);	
		this.state = {};
	}
	
	render () {
		return (
			<Home />
		);
	}
}

let createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
let store = createStoreWithMiddleware(rootReducers);

render(
	<Provider store={store}>
		<Home />
	</Provider>, 
	document.getElementById('container')
);

// setState() -> render
// data <-> view
// flex 


// react + react-router + redux + react-router-redux react-dom
// (typescript/babel/coffeescript) + webpack
// es6/es5
// 兼容性
// 
// node -> server / tool 
// 
// server + react server render
// vue 
// vue / react
// angular

// jsx -> jsx-transform
// jsx
// react-dom
// react-server


// function readFile (filepath) {
// 	return new Promise((resolve) ＝> {
// 		resolve(data);
// 	})
// }

// // 
// try{
// 	let content = await readFile('hlelo.txt')
// 	console.log('hello');
// }cathc(e){
// 
// }

// webassembly -> 
// http2 ->
// wpa -> android

// service-worker
// 