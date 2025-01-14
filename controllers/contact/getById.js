const {contact} = require('../../services')
const getContactById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await contact.getById(id)
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      })
    }
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
module.exports = getContactById
