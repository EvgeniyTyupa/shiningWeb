import * as axios from "axios"

const place_id = "ChIJwzZbXg9k3EARKFzCRRj8emM"
const api_key = "AIzaSyCMprV7kO-zyJ4GgX2h8GJRfkyZPBnAsVM"

const instance = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/place/details/"
})

export const googleApi = {
    getReviews(){
        return instance.get(`json?place_id=${place_id}&fields=reviews&key=${api_key}`)
        .then(response => response.data)
    }
}