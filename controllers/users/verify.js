const { usersService } = require('../../services')

const verify = async (req, res, next) => {
  const { verificationToken } = req.params
  const user = await usersService.findByToken(verificationToken)
  try {
    if (!user) {
      res.status(404).json({
        status: 'error',
        code: 404,
        messasge: 'User not found',
      })
      return
    }
    await usersService.updateUser(user._id, {
      verifyToken: null,
      verify: true,
    })
    res.json({
      status: 'success',
      code: 200,
      messasge: 'Verification successful',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = verify
