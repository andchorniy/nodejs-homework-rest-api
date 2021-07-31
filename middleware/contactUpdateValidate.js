const { validateUptadeContact } = require('../model/schemas/contacts')

const validateUpdateContactMiddleware = (req, res, next) => {
  const error = validateUptadeContact(req.body)
  if (error) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: error.message,
    })
  }
  next()
}

module.exports = validateUpdateContactMiddleware
