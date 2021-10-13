import * as axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3002/api'
})

instance.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${localStorage.usertoken}`
        return config
    }
)

export const mailApi = {
    sendMail(name, phone){
        return instance.post(`/mail`, { name, phone })
        .then(response => response.data)
    }
}

export const authApi = {
    register(username, password){
        return instance.post('/admin/register', { username, password })
        .then(response => response.data)
    },
    login(username, passwrod){
        return instance.post('/admin/login', { username, passwrod })
        .then(response => response.data)
    },
    authMe(){
        return instance.get('admin/auth')
        .then(response => response.data)
    }
}