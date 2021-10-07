// need to require like this
const { Village } = require('../models')

const Validator = require('fastest-validator')
const validation = new Validator()

module.exports.index = async(req, res) => {
  const village = await Village.findAll()

  res.status(200).json(village)
}

module.exports.store = async(req, res) => {
  const schema = {
    name: 'string'
  }

  const validate = validation.validate(req.body, schema)

  if (validate.length) {
    return res
      .status(400)
      .json(validate)
  }

  const village = await Village.create(req.body)

  res.status(201).json(village)
}
