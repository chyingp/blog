import { combineReducers } from 'redux'
import { addErrorCode } from '../actions'

let initialState = {
	loginStatus: '',
	regStatus: ''
}

const loginApp = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				loginStatus: 'pending'
			}
		default:
			return state;	
	}
}

const regApp = (state = initialState, action) => {
	switch (action.type) {
		case 'REG':
			return {
				...state,
				regStatus: 'pending'
			}	
		default:
			return state;	
	}
}

const reducer = {
	loginApp: loginApp,
	regApp: regApp,
}

export default reducer