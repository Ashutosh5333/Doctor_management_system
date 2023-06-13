import { applyMiddleware, combineReducers, legacy_createStore ,compose} from "redux";
import thunk  from "redux-thunk"
import {Reducer as AppReducer  } from "./AppReducer/Reducer";
import {Reducer as AuthReducer } from "./AuthReducer/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer= combineReducers({AppReducer,AuthReducer})

export const store = legacy_createStore(rootReducer,composeEnhancers (applyMiddleware(thunk)));
