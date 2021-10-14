const express = require('express')
const router = express.Router()
const controller = require('../controllers/music')
const passport = require('passport')

router.post('/', passport.authenticate('jwt', { session: false }), controller.create)

module.exports = router;