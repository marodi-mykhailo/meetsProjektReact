import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./authReducer";
import {appReducer} from "./appReducer";
import {meetUpReducer} from "./meetUpReduser";
import {userReducer} from "./userReducer";

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    meetUp: meetUpReducer,
    user: userReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppStateType = ReturnType<typeof reducers>

export default store;
