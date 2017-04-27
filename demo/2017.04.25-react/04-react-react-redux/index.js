import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { queryItems } from './actions';
import reducers from './reducers';
import App from './ConnectedApp';
import { Provider } from 'react-redux';

const store = createStore(
	reducers, 
	applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

// 运行命令：
// ../node_modules/webpack/bin/webpack.js