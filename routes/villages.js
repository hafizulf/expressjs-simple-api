const express = require('express')
const router = express.Router()

// need to require like this
const { Village } = require('../models')

router.get('/villages', async(req, res) => {
  const village = await Village.findAll()

  res.status(200).json(village)
})

module.exports = router
