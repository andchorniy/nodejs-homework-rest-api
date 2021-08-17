const register = require('./register')
const login = require('./login')
const getCurrentUser = require('./getCurrentUser')
const logout = require('./logout')
const updateSubcription = require('./updateSubcription')
const loadAvatar = require('./loadAvatar')
const verify = require('./verify')
const sendVerificationMail = require('./sendVerificationMail')

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
  updateSubcription,
  loadAvatar,
  verify,
  sendVerificationMail,
}
