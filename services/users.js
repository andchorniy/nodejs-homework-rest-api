const User = require('../model/user')

const findOne = ({ email }) => {
  return User.findOne({ email })
}
const findByToken = verifyToken => {
  return User.findOne({ verifyToken })
}
const findById = ({ id }) => {
  return User.findById(id)
}

const register = ({ email, password, ...rest }) => {
  const user = new User({ email, ...rest })
  user.setPassword(password)
  return user.save()
}
const updateUser = (id, uptate) => {
  return User.findByIdAndUpdate(id, uptate, { useFindAndModify: false })
}
module.exports = {
  findByToken,
  register,
  findOne,
  updateUser,
  findById,
}
