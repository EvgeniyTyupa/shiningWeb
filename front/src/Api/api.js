import * as axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3002/api'
})

const tgToken = "2076946657:AAGqw5LMt7rBw3mA6x-uTsCcqx_DZKF5wa0"
const chatId = "-747372232"
const tgUrl = "https://api.telegram.org/bot" + tgToken + "/sendMessage"

instance.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${localStorage.usertoken}`
        return config
    }
)

export const mailApi = {
    sendMail(name, phone){
        let message = "<strong>Нова заявка!</strong>\n<strong>Iм'я:</strong> " + name +  "\n<strong>Телефон:</strong> " + phone;
        const data = {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        }
        return axios.post(tgUrl, data)
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