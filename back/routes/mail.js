const express = require('express')
const router = express.Router()
const controller = require('../controllers/mail')

router.post('/', controller.send)

module.exports = router