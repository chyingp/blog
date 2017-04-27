import React from 'react';
import { queryItems } from './actions';

class App extends React.Component {

	constructor (props) {
		super(props);
		this.state = this.props.store.getState();
	}

	componentDidMount () {

		let { store } = this.props;
		
		store.subscribe(() => this.setState(store.getState()));

		let items = ['hello', 'world'];	
		store.dispatch( queryItems(items) )
	}

	render () {
		const { store } = this.props;
		return (
			<div>
				Message: {store.getState().items.join(' ')}
			</div>
		);
	}
};

export default App;