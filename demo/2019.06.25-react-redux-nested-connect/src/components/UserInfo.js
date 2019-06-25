import React, { Component } from 'react';

class UserInfo extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount () {
		this.props.fetchUserInfo();	
	}
	render() {
		const { nick } = this.props;
		return (
			<div>UserInfo: {nick}</div>
		);
	}
}

export default UserInfo;