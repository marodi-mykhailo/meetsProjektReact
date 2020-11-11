import axios from 'axios'
import {MeetUpResponseDataType, MeetUpReducerInitialState, MeetUpDataType} from "./meetUpsListReduser";
import {EditedValueType} from "../components/EditMeetUp/EditMeetUp";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://connectusweb20201107204235.azurewebsites.net/api/',
    headers: {"Access-Control-Allow-Origin": "*"}
})

export type ResponseType<D = null> = {
    resultCode: number
    message: Array<string>
    data: D
}
export const authAPI = {
    register(username: string, email: string, password: string, confirmPassword: string) {
        return instance.post<ResponseType>('account/register', {username, email, password, confirmPassword})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType>('account/login', {email, password, rememberMe})
    },
    me() {
        return instance.get<ResponseType>('account/myAccount')
    },
    logOut() {
        return instance.get('account/logout')
    }

}

export const meetUpAPI = {
    getList() {
        return instance.get<ResponseType<MeetUpReducerInitialState>>('home')
    },
    getMyMeetUps() {
        return instance.get<ResponseType<Array<MeetUpResponseDataType>>>('admin/meetups')
    },
    getMeetUpItem(meetUpId: string) {
        return instance.get<ResponseType<MeetUpResponseDataType>>(`home/${meetUpId}`)
    },
    createMeetUp(meetUpData: MeetUpDataType) {
        return instance.post<ResponseType<MeetUpResponseDataType>>('admin/meetups', meetUpData)
    },
    deleteMeetUp(meetUpId: string) {
        return instance.delete<ResponseType>(`admin/meetups/${meetUpId}`)
    },
    editMeetUp(meetUpId: string, editMeetUpData: EditedValueType,) {
        return instance.put<ResponseType>(`admin/meetups/${meetUpId}`, editMeetUpData)
    },
    joinMeetUp(meetUpId: string) {
        return instance.post<ResponseType>(`home/join/${meetUpId}`)
    },
    unJoinMeetUp(meetUpId: string) {
        return instance.delete<ResponseType>(`home/unjoin/${meetUpId}`)
    }
}

