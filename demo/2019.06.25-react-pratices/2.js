import { Component } from 'react';

function fetchedUserInfo(data) {
	return {
		type: 'FETCH_USER_INFO',
		payload: data	
	};
}

function fetchUserInfo() {
	return function(dispatch) {
		fetch('/cgi-bin/userinfo')
			.then(res => res.json())
			.then(data => dispatch(fetchedUserInfo(data)));
	};
}

class UserInfo extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { nick } = this.props;
		return (
			<div>{nick}</div>
		);
	}
}

/**
 * 问题：如果 <UserInfo /> 被多个页面使用，那么，这些页面都都需要做几件事情：
 * 1、在顶层引入对应的 action/reducer
 * 2、主动调用 dispatch(fetchUserInfo())
 * 3、主动将 nick 字段传给 <UserInfo />
 * 
 */
class App extends Component {
	componentDidMount() {
		this.props.dispatch(fetchUserInfo());
	}
	render() {
		const { nick } = this.props;
		return (
			<div>
				<UserInfo nick={nick} />
			</div>
		);
	}
}