const sendMail = require('../../utils/sendMail')
const { usersService } = require('../../services')
const sendVerificationMail = async (req, res, next) => {
  const { email } = req.body
  if (!email) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: 'missing required field email',
    })
    return
  }
  try {
    const user = await usersService.findOne({ email })
    if (!user) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: ' Not Found',
      })
    }
    if (user.verify) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Verification has already been passed',
      })
      return
    }
    const mail = {
      to: email,
      subject: 'Verification',
      text: `http://localhost:3000/api/users/verify/${user.verifyToken}`,
    }
    sendMail(mail)
    res.json({
      status: 'success',
      code: 200,
      message: 'Verification email sent',
    })
  } catch (error) {
    next(error)
  }
}
module.exports = sendVerificationMail
