const { favoriteValidationSchema } = require('../model/schemas/contacts')

const favoriteValidation = (req, res, next) => {
  const error = favoriteValidationSchema(req.body)
  if (error) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: error.message,
    })
  }
  next()
}

module.exports = favoriteValidation
