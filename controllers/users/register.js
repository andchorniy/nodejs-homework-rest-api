const gravatar = require('gravatar')
const { v4 } = require('uuid')
const { usersService } = require('../../services')
const sendMail = require('../../utils/sendMail')

const register = async (req, res, next) => {
  const findOne = await usersService.findOne(req.body)
  if (findOne) {
    return res.status(409).json({
      status: 'Conflict',
      code: 409,
      message: 'Email in use',
    })
  }
  const avatarUrl = gravatar.url(req.body.email)
  const verifyToken = v4()
  const result = await usersService.register({
    ...req.body,
    verifyToken,
    avatarUrl,
  })
  const { email, subscription } = result
  const mail = {
    to: email,
    subject: 'Verification',
    text: `http://localhost:3000/api/users/verify/${verifyToken}`,
  }
  try {
    sendMail(mail)
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
