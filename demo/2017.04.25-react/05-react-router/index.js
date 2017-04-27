import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { queryItems } from './actions';
import reducers from './reducers';
import App from './ConnectedApp';
import Home from './ConnectedHome';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const store = createStore(
	reducers, 
	applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<ul>
					<li><Link to="/app">App</Link></li>
					<li><Link to="/home">Home</Link></li>
				</ul>
				<Route path="/app" component={App} />
				<Route path="/home" component={Home} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
);

// 运行命令：
// ../node_modules/webpack/bin/webpack.js