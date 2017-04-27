import React from 'react';
import { queryItemsAsync } from './actions';

class App extends React.Component {

	componentDidMount () {

		let items = ['react', 'react-thunk', 'react-redux'];	
		this.props.getMessages(items);
	}

	render () {

		return (
			<div>
				Message: {this.props.messages.join(', ')}
			</div>
		);
	}
};

export default App;