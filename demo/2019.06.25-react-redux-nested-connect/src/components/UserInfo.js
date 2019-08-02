import React, { Component } from 'react';

class UserInfo extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount () {
		setTimeout(() => {
			this.props.fetchUserInfo();
		}, 3000);		
	}
	render() {
		const { nick } = this.props;
		return (
			<div>UserInfo: {nick}</div>
		);
	}
}

UserInfo.displayName = 'UserInfo';

export default UserInfo;