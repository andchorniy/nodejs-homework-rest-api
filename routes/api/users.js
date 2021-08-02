const express = require('express')
const router = express.Router()
const { users } = require('../../controllers')
const validateUserMiddleware = require('../../middleware/userRegisterValidate')

router.post('/signup', validateUserMiddleware, users.register)
router.post('/login', validateUserMiddleware, users.login)

module.exports = router
