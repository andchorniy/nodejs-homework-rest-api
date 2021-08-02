const { validateContact } = require('../model/schemas/contacts')

const validateContactMiddleware = (req, res, next) => {
  const error = validateContact(req.body)
  if (error) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: error.message,
    })
  }
  next()
}

module.exports = validateContactMiddleware
