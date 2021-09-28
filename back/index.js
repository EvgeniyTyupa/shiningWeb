const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
let cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3002

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const mailRoute = require('./routes/mail')

app.use('/api/mail', mailRoute)

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: false
        }, () => console.log('connected to DB!'))
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    }catch(e) {
        console.log(e)
    }
}

start()