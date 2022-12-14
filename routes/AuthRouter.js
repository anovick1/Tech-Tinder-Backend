const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.post('/login', controller.Login)
router.post('/staylogged', controller.stayLogged)
router.post('/register', controller.Register)
router.put(
  '/update',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
router.post('/email', controller.email)

module.exports = router
