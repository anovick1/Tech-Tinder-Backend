const Router = require('express').Router()
const controller = require('../controllers/VideoController')
const middleware = require('../middleware')

Router.get('/all', controller.GetPosts)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)
Router.put(
  '/:videopost_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)
Router.delete(
  '/:videopost_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)

module.exports = Router
