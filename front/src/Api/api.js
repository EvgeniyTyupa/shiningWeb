import * as axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3002/api'
})

export const mailApi = {
    sendMail(name, phone){
        return instance.post(`/mail`, { name, phone })
        .then(response => response.data)
    }
}