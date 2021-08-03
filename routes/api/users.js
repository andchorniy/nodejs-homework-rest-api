const express = require('express')
const router = express.Router()
const { users } = require('../../controllers')
const middle = require('../../middleware/')
require('../../configs/passport-config')

router.post('/signup', middle.validateUserMiddleware, users.register)
router.post('/login', middle.validateUserMiddleware, users.login)
router.post('/logout', middle.verifyToken, users.logout)

router.patch(
  '/',
  middle.verifyToken,
  middle.validateSubscription,
  users.updateSubcription,
)

router.get('/current', middle.verifyToken, users.getCurrentUser)

module.exports = router
