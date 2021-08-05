const { validateUpdateSubscription } = require('../model/schemas/user')

const validateSubscription = (req, res, next) => {
  const error = validateUpdateSubscription(req.body)
  if (error) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: error.message,
    })
  }
  next()
}

module.exports = validateSubscription
