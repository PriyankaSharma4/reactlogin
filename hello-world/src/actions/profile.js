import { API_URL } from '../config';
import axios from 'axios';

export function getUserProfile(params) {

	return {
		type: "PROFILE",
		payload: axios.post( API_URL + '/userdetail', params )
	}

}

export function deleteUserProfile(params) {

	return {
		type: "PROFILE_DELETE",
		payload: axios.post( API_URL + '/userdelete', params )
	}

}

export function updateUserProfile(params) {

	return {
		type: "PROFILE_UPDATE",
		payload: axios.post( API_URL + '/userupdate', params )
	}

}












