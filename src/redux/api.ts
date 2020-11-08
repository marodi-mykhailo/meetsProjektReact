import axios from 'axios'
import {MeetUpReducerInitialState} from "./meetUpReduser";

export const instance = axios.create({
    baseURL: 'https://connectusweb20201107204235.azurewebsites.net/api/',
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
        return instance.get<ResponseType>('/account')
    }

}

export const meetUpAPI = {
    getList() {
        return instance.get<ResponseType<MeetUpReducerInitialState>>('home')
    }
}
