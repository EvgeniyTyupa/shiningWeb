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
    login(username, password){
        return instance.post('/admin/login', { username, password })
        .then(response => response.data)
    },
    authMe(){
        return instance.get('admin/auth')
        .then(response => response.data)
    }
}

export const musicApi = {
    create(data){
        const newFormData = new FormData()
        newFormData.append('name', data.name)
        newFormData.append('artist', data.artist)
        newFormData.append('genre', data.genre)
        newFormData.append('year_of_release', data.year_of_release)
        newFormData.append('image', data.image, data.image.name)
        newFormData.append('track', data.track, data.track.name)

        return instance.post('/music', newFormData)
        .then(response => response.data)
    }
}