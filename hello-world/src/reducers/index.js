/****
- Defines Root Reducer for App
- Combines all the reducer and export as a single reducer
*/

import {combineReducers} from "redux"


import register from './register';
import login from './login';
import profile from './profile';

export default combineReducers({
	
	register,
	login,
	profile
})