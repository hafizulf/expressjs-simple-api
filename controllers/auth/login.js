const { User } = require('../../models')

const bcrypt = require('bcrypt')

module.exports.index = async(req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } })
  if(!user) return res.json({ message: "Invalid username" })

  const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
  if(!passwordIsValid) return res.json({ message: "Invalid password" })

  res.json("ok")
}
