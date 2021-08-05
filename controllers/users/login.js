const jwt = require('jsonwebtoken')
require('dotenv').config()
const { usersService } = require('../../services')
const login = async (req, res, next) => {
  const user = await usersService.findOne(req.body)
  if (!user || !user.comparePassword(req.body.password)) {
    return res.status(401).json({
      status: 'error',
      code: 401,
      message: 'Email or password is wrong',
    })
  }
  const { SECRET_KEY } = process.env
  const payload = {
    id: user._id,
  }
  const token = jwt.sign(payload, SECRET_KEY)
  await usersService.updateUser(user._id, { token })
  const { email, subscription } = user

  try {
    res.json({
      status: 'success',
      code: 200,
      token,
      data: {
        email,
        subscription,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = login
