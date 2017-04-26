import React from 'react';
import ReactDom from 'react-dom';
import rootReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(rootReducers);

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('app')
);