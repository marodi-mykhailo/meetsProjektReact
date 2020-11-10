import {Dispatch} from "redux";
import {authAPI, meetUpAPI} from "./api";
import {setAppStatusAC, SetAppStatusActionType} from "./appReducer";

export type MeetUpResponseDataType = {
    id: string
    title: string,
    description: string,
    meetupImgPath: string,
    meetupDate: string,
    city: string,
    createdByUser: string,
    users: []
}

type PageViewDataType = {
    pageNumber: number,
    totalPages: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean
}

export type MeetUpDataType = {
    title: string,
    description: string,
    meetupImgPath: string,
    meetupDate: string,
    city: string,
}


export type MeetUpReducerInitialState = {
    meetups: Array<MeetUpResponseDataType>,
    pageView: PageViewDataType,
    isCreated: boolean
}


let initialState: MeetUpReducerInitialState = {
    meetups: [
        {
            id: "36e6f7fc-3739-4545-f8fb-08d883e63470",
            title: "4 Test title",
            description: "Test description by the way, ok?",
            meetupImgPath: "C:\\Users\\Jerzy\\source\\repos\\Back\\ConnectUs\\wwwroot\\img\\highres_493244320.png",
            meetupDate: "2020-11-08T14:00:01.9332275",
            city: "Rzeszow",
            createdByUser: 'a',
            users: []
        }
    ],
    pageView: {
        pageNumber: 1,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: false
    },
    isCreated: false
}

type MeetUpReducerActionType =
    | ReturnType<typeof setMeetUps>
    | ReturnType<typeof createMeetUp>
    | ReturnType<typeof deleteMeetUp>
    | ReturnType<typeof setIsCreated>


export const meetUpListReducer = (state = initialState, action: MeetUpReducerActionType): MeetUpReducerInitialState => {
    switch (action.type) {
        case "SET_MEET_UPS":
            return {
                ...state,
                meetups: action.meetUps.map(tl => ({...tl}))
            }
        case "CREATE_MEET_UP":
            return {
                ...state,
                meetups: [action.meetUpData, ...state.meetups]
            }
        case "DELETE_MEET_UP":
            return {
                ...state,
                meetups: state.meetups.filter(item => item.id != action.meetUpId)
            }
        case "SET_IS_CREATED":
            return {
                ...state,
                isCreated: action.isCreated
            }
        default:
            return state
    }
}

export const setMeetUps = (meetUps: Array<MeetUpResponseDataType>) => ({
    type: 'SET_MEET_UPS', meetUps
} as const)


export const createMeetUp = (meetUpData: MeetUpResponseDataType) => ({
    type: "CREATE_MEET_UP", meetUpData
} as const)

export const deleteMeetUp = (meetUpId: string) => ({
    type: "DELETE_MEET_UP", meetUpId
} as const)

export const setIsCreated = (isCreated: boolean) => ({
    type: "SET_IS_CREATED", isCreated
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

export const createMeetUpTC = (meetUpData: MeetUpDataType) => {
    return (dispatch: Dispatch) => {
        dispatch(setAppStatusAC("loading"))
        meetUpAPI.createMeetUp(meetUpData)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(createMeetUp(res.data.data))
                    dispatch(setAppStatusAC('succeeded'))
                    dispatch(setIsCreated(true))
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


export const getMyMeetUpsTC = () => {
    return (dispatch: Dispatch) => {
        dispatch(setAppStatusAC('loading'))
        meetUpAPI.getMyMeetUps()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setMeetUps(res.data.data))
                    dispatch(setAppStatusAC('succeeded'))
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

export const deleteMeetUpTC = (meetUpId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setAppStatusAC("loading"))
        meetUpAPI.deleteMeetUp(meetUpId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(deleteMeetUp(meetUpId))
                    dispatch(setAppStatusAC("succeeded"))
                }
            })
    }
}
