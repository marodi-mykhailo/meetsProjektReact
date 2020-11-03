import {authAPI} from "./api";
import {Dispatch} from "redux";


type AuthInitialState = {
    email: null | string,
    password: null | string,
    confirmPassword: null | string,
    username: null | string,
    isAuth: true | false,
    isRegister: true | false,
}


const authInitialState: AuthInitialState = {
    email: null,
    password: null,
    confirmPassword: null,
    username: null,
    isAuth: false,
    isRegister: false,
}

type ActionType = ReturnType<typeof setRegister>

export const authReducer = (state = authInitialState, action: ActionType) => {
    switch (action.type) {
        case "SET_REGISTER":
            return {
                ...state,
                isRegister: true
            }
        default:
            return state
    }
}

const setRegister = () => ({
    type: 'SET_REGISTER'
} as const)

export const register = (username: string, email: string, password: string, confirmPassword: string) => {
    return (dispatch: Dispatch) => {
        authAPI.register(username, email, password, confirmPassword)
            .then(response => {
                debugger
                console.log(response)
            }).catch(error => {
            if (!error.response) {
                // network error
                console.log('Error: Network Error');
            } else {
              console.log(error.response.data.message);
            }
        })
    }
}


export const getList = () => {
    return (dispatch: Dispatch) => {
        authAPI.getList()
            .then(response => {
                console.log(response)
            })
    }
}
