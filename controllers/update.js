const { update } = require('../services')
const updateContact = async (req, res, next) => {
  const { id } = req.params
  const { body } = req
  try {
    const result = await update(id, body)
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

module.exports = updateContact
