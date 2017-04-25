import React from 'react';
import {render} from 'react-dom';
import { queryHelp } from '../actions'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducers from '../reducers';
import { Provider, connect } from 'react-redux'

class App extends React.Component {
	
	constructor (props) {
		super(props);	
		this.state = {
			value: ''
		};
	}

	componentDidMount () {
		// console.log( store.getState() );
		// store.dispatch( queryHelp() );
		this.props.getHelp();
	}

	getFilteredItems () {		
		return this.props.items.filter( item => {
			return item.title.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1;
		});
	}

	render () {
		return (
			<div>
				<div>
					<label htmlFor="">内容过滤：</label>
					<input 
						type="text" 
						value={this.state.value} 
						onChange={(evt) => this.setState({value: evt.target.value})} 
					/>
				</div>	
				<div>
					<ul>
						{this.getFilteredItems().map(item => <li>{item.title}</li> )}
					</ul>					
				</div>			
			</div>	
		);
	}
}

let createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
let store = createStoreWithMiddleware(rootReducers);

let mapStateToProps = (state) => {
	return {
		items: state.items
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		getHelp: () => dispatch( queryHelp() )
	};
};

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

render(
	<Provider store={store}>
		<ConnectedApp />
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