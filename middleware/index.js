const validateContactMiddleware = require('./contactValidate')
const validateUpdateContactMiddleware = require('./contactUpdateValidate')
const favoriteValidation = require('./favoriteValidate')
const verifyToken = require('./verifyToken')
const validateUserMiddleware = require('./userRegisterValidate')
const validateSubscription = require('./updateSubscription')

module.exports = {
  validateContactMiddleware,
  validateUpdateContactMiddleware,
  favoriteValidation,
  validateUserMiddleware,
  verifyToken,
  validateSubscription,
}
