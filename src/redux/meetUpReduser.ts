import {Dispatch} from "redux";
import {authAPI, meetUpAPI} from "./api";
import {setAppStatusAC, SetAppStatusActionType} from "./appReducer";

export type MeetUpDataType = {
    id: string
    title: string,
    description: string,
    meetupImgPath: string,
    meetupDate: string,
    city: string,
    createdByUser: string,
    users: null
}

type PageViewDataType = {
    pageNumber: number,
    totalPages: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean
}


export type MeetUpReducerInitialState = {
    meetups: Array<MeetUpDataType>,
    pageView: PageViewDataType
}


let initialState: MeetUpReducerInitialState = {
    meetups: [
        {
            "id": "36e6f7fc-3739-4545-f8fb-08d883e63470",
            "title": "4 Test title",
            "description": "Test description by the way, ok?",
            "meetupImgPath": "C:\\Users\\Jerzy\\source\\repos\\Back\\ConnectUs\\wwwroot\\img\\highres_493244320.png",
            "meetupDate": "2020-11-08T14:00:01.9332275",
            "city": "Rzeszow",
            "createdByUser": 'a',
            "users": null
        }
    ],
    pageView: {
        pageNumber: 1,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: false
    }
}

type MeetUpReducerActionType = |ReturnType<typeof setMeetUps>

export const meetUpReducer = (state = initialState, action: MeetUpReducerActionType): MeetUpReducerInitialState => {
    switch (action.type) {
        case "SET_MEET_UPS":
            return {
                ...state,
                meetups: action.meetUps.map(tl => ({...tl}))
            }
        default:
            return state
    }
}

export const setMeetUps = (meetUps: Array<MeetUpDataType>) => ({
    type: 'SET_MEET_UPS', meetUps
} as const)

export const getList = () => {
    return (dispatch: Dispatch) => {
        dispatch(setAppStatusAC('loading'))
        meetUpAPI.getList()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setMeetUps(res.data.data.meetups))
                    dispatch(setAppStatusAC('succeeded'))
                }
            })
    }
}
