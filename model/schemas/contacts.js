const { Schema } = require('mongoose')
const Joi = require('joi')

const contactsSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
)
const validateContact = newContact => {
  const addContactSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
  })
  const { error } = addContactSchema.validate(newContact)
  return error
}
const validateUptadeContact = newContact => {
  const addContactSchema = Joi.object({
    name: Joi.string().min(2),
    email: Joi.string().email(),
    phone: Joi.string(),
  })
  const { error } = addContactSchema.validate(newContact)
  return error
}
const favoriteValidationSchema = newContact => {
  const addContactSchema = Joi.object({
    favorite: Joi.boolean().required(),
  })
  const { error } = addContactSchema.validate(newContact)
  return error
}
module.exports = {
  validateContact,
  validateUptadeContact,
  favoriteValidationSchema,
  contactsSchema,
}
