import { createReducers } from 'redux-util'

var loginApp = createReducers({
	getInitialState: function(){
		return {
			loginStatus: '',
			regStatus: ''
		};
	},
	LOGIN: function(state, action){
		state.loginStatus = 'pending';
		return state;
	}
});

var regApp = createReducers({
	getInitialState: function(){
		return {
			regStatus: '',
			regStatus: ''
		};
	},
	LOGIN: function(state, action){
		state.regStatus = 'pending';
		return state;
	}
});

const reducer = {
	loginApp: loginApp,
	regApp: regApp,
}

export default reducer