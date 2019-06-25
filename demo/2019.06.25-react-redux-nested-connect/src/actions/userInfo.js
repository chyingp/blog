import { FETCH_USER_INFO } from '../constans';

function fetchedUserInfo(data) {
	return {
		type: FETCH_USER_INFO,
		payload: data	
	};
}

export function fetchUserInfo() {
	return function(dispatch) {
        setTimeout(() => {
            dispatch(fetchedUserInfo({nick: 'chyingp'}));
        }, 500);
		// fetch('/cgi-bin/userinfo')
		// 	.then(res => res.json())
		// 	.then(data => dispatch(fetchedUserInfo(data)));
	};
}