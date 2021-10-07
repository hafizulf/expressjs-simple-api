const express = require('express')
const router = express.Router()

const villageController = require('../controllers/village')

router.route('/villages')
  .get(villageController.index)
  .post(villageController.store)

module.exports = router
