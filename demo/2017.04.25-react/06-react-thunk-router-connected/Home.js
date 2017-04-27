import React from 'react';

class Home extends React.Component {
	render () {
		return (
			<div>Home: {this.props.location.pathname}</div>
		);
	}
};

export default Home;