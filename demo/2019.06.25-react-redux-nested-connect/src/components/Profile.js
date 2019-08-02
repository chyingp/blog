import React, { Component } from 'react';

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { nick } = this.props;
		return (
			<div>Profile: {nick}</div>
		);
	}
}

Profile.displayName = 'Profile';

export default Profile;