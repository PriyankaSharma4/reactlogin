export default function reducer( state  = {
	response: null,
	isLoading: false,
	error: null
}, action){

	switch(action.type){

		case 'LOGIN_RESET_PROPS':
			return { ...state, error: null, response: null }

		case 'LOGIN_PENDING':
			return {...state, isLoading: true, response: null, error: null}
		case 'LOGIN_FULFILLED':
			console.log(action.payload.data)
			return {...state, isLoading: false, response: action.payload.data, error: null }
		case 'LOGIN_REJECTED':
	
			return {...state, isLoading: false, response: null, error: action.payload.response.data.errors[0]}
		default:

	}
	
	return state
}