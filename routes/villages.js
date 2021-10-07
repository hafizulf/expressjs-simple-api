const express = require('express')
const router = express.Router()

const villageController = require('../controllers/village')

router.route('/villages')
  .get(villageController.index)
  .post(villageController.store)

router.route('/villages/:id')
  .put(villageController.update)
  .delete(villageController.delete)

module.exports = router
