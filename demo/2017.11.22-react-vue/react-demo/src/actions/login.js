import { createAction } from 'redux-util'

export let login = createAction('LOGIN')

export let loginAsync = createAction('LOGIN_ASYNC', () => dispatch => {
	return dispatch( login() )
})