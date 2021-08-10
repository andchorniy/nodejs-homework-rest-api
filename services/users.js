const gravatar = require('gravatar')
const User = require('../model/user')

const findOne = ({ email }) => {
  return User.findOne({ email })
}
const findById = ({ id }) => {
  return User.findById(id)
}

const register = ({ email, password }) => {
  const avatarUrl = gravatar.url(email)
  const user = new User({ email, avatarUrl })
  console.log(user)
  user.setPassword(password)
  return user.save()
}
const updateUser = (id, uptate) => {
  return User.findByIdAndUpdate(id, uptate, { useFindAndModify: false })
}
module.exports = {
  register,
  findOne,
  updateUser,
  findById,
}
