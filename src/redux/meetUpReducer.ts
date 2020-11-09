import {MeetUpDataType} from "./meetUpsListReduser";
import {Dispatch} from "redux";
import {setAppStatusAC} from "./appReducer";
import {meetUpAPI} from "./api";

const meetUpItem: MeetUpDataType = {
    id: '1',
    title: "1 Test title",
    description: "Test description by the way, ok?",
    meetupDate: "2020-11-08T13:59:49.2552983",
    city: "Rzeszow",
    meetupImgPath: "C:\\Users\\Jerzy\\source\\repos\\Back\\ConnectUs\\wwwroot\\img\\600_478718750.png",
    createdByUser: '',
    users: []
}

type meetUpReducerAction = |ReturnType<typeof setMeetUpItem>


export const meetUpReducer = (state = meetUpItem, action: meetUpReducerAction) => {
    switch (action.type) {
        case "SET_MEET_UP_ITEM":
            return {
                ...state,
                ...action.meetUpData
            }
        default:
            return state;
    }
}

const setMeetUpItem = (meetUpData: MeetUpDataType) => ({
    type: 'SET_MEET_UP_ITEM',
    meetUpData
} as const)

export const getMeetUpItem = (meetUpId: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    meetUpAPI.getMeetUpItem(meetUpId)
        .then(res => {
            dispatch(setMeetUpItem(res.data.data))
            dispatch(setAppStatusAC('succeeded'))
        })
}
