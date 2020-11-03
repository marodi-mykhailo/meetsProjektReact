import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {"Access-Control-Allow-Origin": "*"},
})


export const authAPI ={
    register: (username: string, email: string, password: string, confirmPassword: string) => {
        return instance.post('account/register', {username, email, password, confirmPassword})
    },
    getList: () => {
        return instance.get('home')
    }
}
