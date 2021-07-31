const { remove } = require('../services')
const removeContact = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await remove(id)
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

module.exports = removeContact
