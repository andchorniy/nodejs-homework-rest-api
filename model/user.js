const { model } = require('mongoose')
const validate = require('./schemas/user')

const User = model('user', validate.userSchema)

module.exports = User
