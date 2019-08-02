import React, { Component } from 'react';
import ConnectedUserInfo from './ConnectedUserInfo';
import ConnectedProfile from './ConnectedProfile';

class App extends Component {
	render() {
		const { nick } = this.props;
		return (
			<div>
				<div>App: {nick}</div>
				<ConnectedUserInfo />
				<ConnectedProfile />
			</div>
		);
	}
}

App.displayName = 'App';

export default App;