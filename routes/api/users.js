const express = require('express')
const router = express.Router()
const { users } = require('../../controllers')
const middle = require('../../middleware/')
require('../../configs/passport-config')
const multer = require('multer')
const path = require('path')

const tempDir = path.join(process.cwd(), 'tmp')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
  limits: {
    fileSize: 10000,
  },
})
const uploadMiddleware = multer({
  storage,
})

router.post('/signup', middle.validateUserMiddleware, users.register)
router.post('/login', middle.validateUserMiddleware, users.login)
router.post('/logout', middle.verifyToken, users.logout)

router.patch(
  '/avatars',
  middle.verifyToken,
  uploadMiddleware.single('avatar'),
  users.loadAvatar,
)

router.patch(
  '/',
  middle.verifyToken,
  middle.validateSubscription,
  users.updateSubcription,
)

router.get('/current', middle.verifyToken, users.getCurrentUser)

module.exports = router
