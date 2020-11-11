import {Dispatch} from "redux";
import {authAPI} from "./api";
import {setAppStatusAC} from "./appReducer";

export type MeDataType = {
    "id": string | null,
    "description": string | null,
    "userName": string | null,
    "userImgPath": string | null,
    "birthDay": string | null,
    "meetups": []
}

const initialState: MeDataType = {
    "id": null,
    "description": null,
    "userName": null,
    "userImgPath": null,
    "birthDay": null,
    "meetups": []
}

type UserReducerActionType = | ReturnType<typeof setMe>

export const userReducer = (state = initialState, action: UserReducerActionType): MeDataType => {
    switch (action.type) {
        case "SET_ME":
            return {
                ...state,
                ...action.meData
            }
        default:
            return state
    }
}

const setMe = (meData: MeDataType) => ({
    type: "SET_ME", meData
} as const)

export const getMeTC = () => {
    return (dispatch: Dispatch) => {
        dispatch(setAppStatusAC("idle"))
        authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAppStatusAC("succeeded"))
                }
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

export const logOut = () =>{
    return (dispatch: Dispatch) => {
        authAPI.logOut()
            .then(res => {
            })
    }
}
