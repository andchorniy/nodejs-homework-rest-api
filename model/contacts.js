const { model } = require('mongoose')
const validate = require('./schemas/contacts')

const Contact = model('contact', validate.contactsSchema)

module.exports = Contact
