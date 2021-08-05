const express = require('express')
const router = express.Router()
const { contacts } = require('../../controllers')
const middlewares = require('../../middleware')

router.get('/', middlewares.verifyToken, contacts.listContacts)

router.get('/:id', middlewares.verifyToken, contacts.getContactById)

router.post(
  '/',
  middlewares.validateContactMiddleware,
  middlewares.verifyToken,
  contacts.addContact,
)

router.delete('/:id', contacts.removeContact)

router.patch(
  '/:id',
  middlewares.validateUpdateContactMiddleware,
  contacts.updateContact,
)

router.patch(
  '/:id/favorite',
  middlewares.favoriteValidation,
  middlewares.verifyToken,
  contacts.updateContact,
)

module.exports = router
