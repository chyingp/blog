import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { queryItems } from './actions';
import reducers from './reducers';
import App from './App';

const store = createStore(
	reducers, 
	applyMiddleware(thunk)
);

ReactDOM.render(
	<App store={store} />,
	document.getElementById('app')
);

// 运行命令：
// ../node_modules/webpack/bin/webpack.js