const { usersService } = require('../../services')

const register = async (req, res, next) => {
  const findOne = await usersService.findOne(req.body)
  if (findOne) {
    return res.status(409).json({
      status: 'Conflict',
      code: 409,
      message: 'Email in use',
    })
  }
  const result = await usersService.register(req.body)
  const { email, subscription } = result
  try {
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        email,
        subscription,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = register
