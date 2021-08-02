const express = require('express')
const router = express.Router()
const { contacts } = require('../../controllers')
const middlewares = require('../../middleware')

router.get('/', contacts.listContacts)

router.get('/:id', contacts.getContactById)

router.post('/', middlewares.validateContactMiddleware, contacts.addContact)

router.delete('/:id', contacts.removeContact)

router.patch(
  '/:id',
  middlewares.validateUpdateContactMiddleware,
  contacts.updateContact,
)

router.patch(
  '/:id/favorite',
  middlewares.favoriteValidation,
  contacts.updateContact,
)

module.exports = router
