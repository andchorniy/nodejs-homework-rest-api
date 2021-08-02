const jwt = require('jsonwebtoken')
require('dotenv').config()
const { users } = require('../../services')
const login = async (req, res, next) => {
  const user = await users.findOne(req.body)
  console.log(user.comparePassword(req.body.password))
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
  users.updateToken(user.id, { token })
  const { email, subscription } = user
  res.json({
    status: 'success',
    code: 200,
    token,
    data: {
      email,
      subscription,
    },
  })
}

module.exports = login
