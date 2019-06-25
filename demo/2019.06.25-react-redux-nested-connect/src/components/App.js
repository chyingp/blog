import React, { Component } from 'react';
import ConnectedUserInfo from './ConnectedUserInfo';

class App extends Component {
	render() {
		const { nick } = this.props;
		return (
			<div>
				<div>App: {nick}</div>
				<ConnectedUserInfo />
			</div>
		);
	}
}

export default App;