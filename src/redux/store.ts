import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./authReducer";

const reducers = combineReducers({
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppStateType = ReturnType<typeof reducers>

export default store;
