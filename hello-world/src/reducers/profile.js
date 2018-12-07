export default function reducer( state  = {
	response: null,
	isLoading: false,
	error: null
}, action){

	switch(action.type){

		case 'PROFILE_RESET_PROPS':
			return { ...state, error: null, response: null }

		case 'PROFILE_PENDING':
			return {...state, isLoading: true, response: null, error: null}
		case 'PROFILE_FULFILLED':
			return {...state, isLoading: false, response: action.payload.data.response[0], error: null }
		case 'PROFILE_REJECTED':
	
			return {...state, isLoading: false, response: null, error: action.payload}


		case 'PROFILE_DELETE_RESET_PROPS':
			return { ...state, error: null, response: null }

		case 'PROFILE_DELETE_PENDING':
			return {...state, isLoading: true, response: null, error: null}
		case 'PROFILE_DELETE_FULFILLED':
		console.log(action.payload.data)
			return {...state, isLoading: false, response: action.payload, error: null }
		case 'PROFILE_DELETE_REJECTED':
	
			return {...state, isLoading: false, response: null, error: action.payload}



		case 'PROFILE_UPDATE_RESET_PROPS':
			return { ...state, error: null, response: null }

		case 'PROFILE_UPDATE_PENDING':
			return {...state, isLoading: true, response: null, error: null}
		case 'PROFILE_UPDATE_FULFILLED':
		console.log(action.payload.data)
			return {...state, isLoading: false, response: action.payload, error: null }
		case 'PROFILE_UPDATE_REJECTED':
	
			return {...state, isLoading: false, response: null, error: action.payload}

		default:

	}
	
	return state
}