const express = require('express')
const router = express.Router()

const villageController = require('../controllers/village')

router.get('/villages', villageController.index)

module.exports = router
