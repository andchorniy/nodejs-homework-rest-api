const { contact } = require('../../services')

const addContact = async (req, res, next) => {
  const { body } = req
  const { id } = req.user
  try {
    const result = await contact.add({ owner: id, ...body })
    res.json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addContact
