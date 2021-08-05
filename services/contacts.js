const Contact = require('../model/contacts')

const getAll = (query, id) => {
  const { page = 1, limit = 5, favorite } = query
  const queryFavorite = favorite === undefined ? {} : { favorite }

  return Contact.paginate(
    { ...queryFavorite, owner: id },
    {
      limit,
      page,
    },
  )
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
    const result = await Contact.findByIdAndDelete(id, {
      useFindAndModify: false,
    })
    return result
  } catch (error) {
    console.log(error)
  }
}
const update = async (id, body) => {
  try {
    const result = await Contact.findByIdAndUpdate(id, body, {
      new: true,
      useFindAndModify: false,
    })
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
