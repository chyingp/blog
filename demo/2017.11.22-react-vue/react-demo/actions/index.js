// import { createAction } from 'redux-actions';
// import 'whatwg-fetch'
// import { stringify } from 'querystring'

// 查询错误码列表（已返回）
export let fetchedErrorCode = (data) => ({
	type: 'FETCHED_ERROR_CODE',
	payload: data
})

// 查询错误码列表
export let queryErrorCode = (options = {}) => ((dispatch) => {
	fetch('/service/code/query?' + stringify(options) )
		.then(function(response) {
			return response.json()
		}).then(function(body) {
			dispatch( fetchedErrorCode(body.data) )
		});
})

// 新增错误码（成功）
export let addErrorCodeSuccess = (data) => ({
	type: 'ADD_ERROR_CODE_SUCCESS',
	payload: data
})

// 新增错误码（失败）
export let addErrorCodeError = (data) => ({
	type: 'ADD_ERROR_CODE_ERROR',
	payload: data
})

// 新增错误码（处理中）
export let addErrorCodePending = () => ({
	type: 'ADD_ERROR_CODE_PENDING'
})

// 新增错误码
export let addErrorCode =(options) => (dispatch) => {

	dispatch( addErrorCodePending() )

	fetch('/service/code/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(options)
	})
	.then(function(response){
		return response.json();
	})
	.then(function(data) {
		if(data.ret_code === '0') {
			dispatch( addErrorCodeSuccess(data.data) )
		}else {
			dispatch( addErrorCodeError(data) )
		}	
	});
}