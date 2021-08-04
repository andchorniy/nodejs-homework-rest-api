const User = require('../model/user')

const findOne = ({ email }) => {
  return User.findOne({ email })
}
const findById = ({ id }) => {
  return User.findById(id)
}

const register = ({ email, password }) => {
  const user = new User({ email })
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
