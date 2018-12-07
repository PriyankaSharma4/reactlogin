import { API_URL } from '../config';
import axios from 'axios';

export function loginuser(params) {

	return {
		type: "LOGIN",
		payload: axios.post( API_URL + '/auth/sign_in/', params )
	}

}
