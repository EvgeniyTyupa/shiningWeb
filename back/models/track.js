const mongoose = require('mongoose')

const TrackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    year_of_release: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Music', TrackSchema)