const listContacts = require('./getAll')
const getContactById = require('./getById')
const removeContact = require('./remove')
const addContact = require('./add')
const updateContact = require('./update')

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
