const express = require('express')
const router = express.Router()
const controller = require('../controllers/admins')

router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/auth', controller.me)

module.exports = router;