const { Schema } = require('mongoose')
const bcrypt = require('bcryptjs')
const Joi = require('joi')

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
    avatarUrl: {
      type: String,
      required: [true, 'Avatar is required'],
    },
  },
  { versionKey: false, timestamps: true },
)

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}
const validateUser = newUser => {
  const addUserSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
  })
  const { error } = addUserSchema.validate(newUser)
  return error
}
const validateUpdateSubscription = newSubscription => {
  const updateSchema = Joi.object({
    subscription: Joi.string().valid('starter', 'pro', 'business').required(),
  })
  const { error } = updateSchema.validate(newSubscription)
  return error
}

module.exports = {
  validateUser,
  userSchema,
  validateUpdateSubscription,
}
