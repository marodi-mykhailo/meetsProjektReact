import {Dispatch} from "redux";
import {authAPI, meetUpAPI} from "./api";

type MeetUpDataType = {
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


type MeetUpReducerInitialState = {
    meetups: Array<MeetUpDataType>,
    pageView: PageViewDataType
}

let initialState: MeetUpReducerInitialState = {
    meetups: [],
    pageView: {
        pageNumber: 1,
        totalPages:1,
        hasNextPage: false,
        hasPreviousPage: false
    }
}

export const meetUpReducer = (state = initialState, action: any): MeetUpReducerInitialState => {
    switch (action.type) {
        default:
            return state
    }
}


export const getList = () => {
    return (dispatch: Dispatch) => {
        meetUpAPI.getList()
            .then(response => {
                console.log(response)
            })
    }
}
