const express = require('express')
const router = express.Router()

const authJwt = require('../middleware/authJwt')
const villageController = require('../controllers/village')

router.route('/villages')
  .get(authJwt.verifyToken, villageController.index)
  .post(authJwt.verifyToken, villageController.store)

router.route('/villages/:id')
  .put(authJwt.verifyToken, villageController.update)
  .delete(authJwt.verifyToken, villageController.delete)
  .get(authJwt.verifyToken, verifyToken, villageController.show)

module.exports = router
