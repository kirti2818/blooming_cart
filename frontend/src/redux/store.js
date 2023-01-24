import thunk from "redux-thunk"
import {legacy_createStore, applyMiddleware,compose} from "redux"
import { reducer } from "./reducer"


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose

const store = legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export {store}