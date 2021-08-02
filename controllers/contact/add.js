const { contact } = require('../../services')

const addContact = async (req, res, next) => {
  const { body } = req
  try {
    const result = await contact.add(body)
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
