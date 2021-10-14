const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const upload = require('express-fileupload')
const passport = require('passport');
let cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3002

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(upload())
app.use('/public', express.static('public'));

const mailRoute = require('./routes/mail')
const adminRoute = require('./routes/admin')
const musicRoute = require('./routes/music')

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use('/api/mail', mailRoute)
app.use('/api/admin', adminRoute)
app.use('/api/music', musicRoute)

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }, (e) => console.log('connected to DB!', e))
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    }catch(e) {
        console.log(e)
    }
}

start()


