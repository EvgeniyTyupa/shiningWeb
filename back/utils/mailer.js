const nodemailer = require('nodemailer')
require('dotenv').config()

module.exports = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS
    }
})
