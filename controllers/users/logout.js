const { usersService } = require('../../services')
const logout = async (req, res, next) => {
  const { _id } = req.user
  const token = null
  try {
    await usersService.updateUser(_id, { token })
    res.json({
      status: 'status',
      code: 204,
      message: 'Logout success',
    })
  } catch (error) {
    next(error)
  }
}
module.exports = logout
