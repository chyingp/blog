import React from 'react';
import { connect } from 'react-redux'
import { queryItems } from './actions';

class App extends React.Component {
	componentDidMount () {
		this.props.queryItems();
	}

	render () {
		return (
			<div>{this.props.items.join(', ')}</div>
		);
	}
}

const mapStateToProps = function (state, ownProps) {
	return {
		items: state.items
	};
};

const mapDispatchToProps = function (dispatch) {
	return {
		queryItems: function () {
			dispatch( queryItems(['hello', 'world']) )
		}
	};
};

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;