import { Component } from 'react';

class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nick: ''
		};
	}

	componentDidMount() {
		fetch('/cgi-bin/userinfo')
			.then(res => res.json())
			.then(data => this.setState(data));
	}

	render() {
		const { nick } = this.state;
		return (
			<div>{nick}</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<UserInfo />
			</div>
		);
	}
}