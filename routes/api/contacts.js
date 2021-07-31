const express = require('express')
const router = express.Router()
const ctrls = require('../../controllers')
const middlewares = require('../../middleware/')

router.get('/', ctrls.listContacts)

router.get('/:id', ctrls.getContactById)

router.post('/', middlewares.validateContactMiddleware, ctrls.addContact)

router.delete('/:id', ctrls.removeContact)

router.patch(
  '/:id',
  middlewares.validateUpdateContactMiddleware,
  ctrls.updateContact,
)

router.patch(
  '/:id/favorite',
  middlewares.favoriteValidation,
  ctrls.updateContact,
)

module.exports = router
