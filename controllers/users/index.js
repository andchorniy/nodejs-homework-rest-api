const register = require('./register')
const login = require('./login')
const getCurrentUser = require('./getCurrentUser')
const logout = require('./logout')
const updateSubcription = require('./updateSubcription')

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
  updateSubcription,
}
