const { contact } = require('../../services')
const listContacts = async (req, res, next) => {
  const id = req.user
  try {
    const result = await contact.getAll(req.query, id)
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
