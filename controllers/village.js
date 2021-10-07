// need to require like this
const { Village } = require('../models')

module.exports.index = async(req, res) => {
  const village = await Village.findAll()

  res.status(200).json(village)
}