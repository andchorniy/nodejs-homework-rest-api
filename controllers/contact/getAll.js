const { contact } = require('../../services')
const listContacts = async (req, res, next) => {
  try {
    const result = await contact.getAll()
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}
module.exports = listContacts
