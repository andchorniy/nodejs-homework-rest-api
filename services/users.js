const User = require('../model/user')

const findOne = ({ email }) => {
  return User.findOne({ email })
}

const register = ({ email, password }) => {
  const user = new User({ email })
  user.setPassword(password)
  return user.save()
}
const updateToken = (id, token) => {
  return User.findByIdAndUpdate(id, { token })
}
module.exports = {
  register,
  findOne,
  updateToken,
}
