const { usersService } = require('../../services')
const updateSubcription = async (req, res, next) => {
  const { _id } = req.user
  const { subscription } = req.body
  try {
    const result = await usersService.updateUser(_id, { subscription })
    res.json({
      status: 'success',
      code: 200,
      data: {
        _id,
        subscription,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateSubcription
