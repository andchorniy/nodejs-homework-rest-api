const validateContactMiddleware = require('./contactValidate')
const validateUpdateContactMiddleware = require('./contactUpdateValidate')
const favoriteValidation = require('./favoriteValidate')

module.exports = {
  validateContactMiddleware,
  validateUpdateContactMiddleware,
  favoriteValidation,
}
