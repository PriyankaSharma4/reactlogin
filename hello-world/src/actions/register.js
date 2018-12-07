import { API_URL } from '../config';
import axios from 'axios';

export function getUserRegister(params) {

	return {
		type: "REGISTER",
		payload: axios.post( API_URL + '/auth', params )
	}

}
