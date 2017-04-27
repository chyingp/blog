import React from 'react';
import { connect } from 'react-redux'
import { queryItems } from './actions';

class App extends React.Component {
	componentDidMount () {
		this.props.actions.queryItems();
	}

	render () {
		return (
			<div>{this.props.nick}: {this.props.items.join(', ')}</div>
		);
	}
}

const mapStateToProps = function (state, ownProps) {
	return {
		nick: ownProps.nick,
		items: state.items
	};
};

const mapDispatchToProps = function (dispatch, ownProps) {
	let items = ['hello', ownProps.nick];
	return {
		queryItems: function () {
			dispatch( queryItems(items) )
		}
	};
};

// const actions = {
// 	queryItems: function (items) {		
// 		return {
// 			type: 'QUERY_ITEMS',
// 			payload: ['hello', 'world']
// 		}
// 	}
// }

const mergeProps = function (stateProps, dispatchProps, ownProps) {
	return Object.assign(
		{}, 
		stateProps, 
		{ actions: dispatchProps }, 
		ownProps
	);
}

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);

export default ConnectedApp;