const express = require('express')
const router = express.Router()
const controller = require('../controllers/music')
const passport = require('passport')

router.get('/', controller.get)
router.post('/', passport.authenticate('jwt', { session: false }), controller.create)
router.patch('/:id', passport.authenticate('jwt', { session: false }), controller.update)

module.exports = router;