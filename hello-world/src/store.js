import {applyMiddleware, createStore} from 'redux';

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

//import { loadingBarMiddleware } from 'react-redux-loading-bar'

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk)

export default createStore(reducer, middleware);