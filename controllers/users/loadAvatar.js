const path = require('path')
const fs = require('fs/promises')
const Jimp = require('jimp')
const { usersService } = require('../../services')

const loadAvatar = async (req, res, next) => {
  const userId = req.user.id
  const publicDir = path.join(process.cwd(), 'public/avatars')
  const { path: tempDir, originalname } = req.file

  try {
    const cropedAvatar = await Jimp.read(tempDir)
    await cropedAvatar.autocrop().resize(250, 250).writeAsync(tempDir)
    const file = `${userId}-${originalname}`
    const avatarUrl = path.join(publicDir, file)
    fs.rename(tempDir, avatarUrl)
    await usersService.updateUser(req.user._id, { avatarUrl })
    res.json({
      status: 'success',
      code: 200,
      data: {
        avatarUrl,
      },
    })
  } catch (error) {
    fs.unlink(tempDir)
    next(error)
  }
}

module.exports = loadAvatar
