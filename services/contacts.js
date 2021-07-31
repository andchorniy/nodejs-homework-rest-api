const Contact = require('../model/contacts')

const getAll = () => {
  return Contact.find({})
}

const add = newContact => {
  return Contact.create(newContact)
}
const getById = async id => {
  try {
    const result = await Contact.findById(id)
    return result
  } catch (error) {
    console.log(error)
  }
}
const remove = async id => {
  try {
    const result = await Contact.findByIdAndDelete(id)
    return result
  } catch (error) {
    console.log(error)
  }
}
const update = async (id, body) => {
  try {
    const result = await Contact.findByIdAndUpdate(id, body, { new: true })
    return result
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  getAll,
  add,
  getById,
  remove,
  update,
}
