require('dotenv').config()

const { User } = require('../../models')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.index = async(req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } })
  if(!user) return res.json({ message: "Invalid username" })

  const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
  if(!passwordIsValid) return res.json({ message: "Invalid password" })

  const token = jwt.sign(
    { id: user.id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: 86400 }
  )

  res.status(200).send({
    id: user.id,
    username: user.username,
    email: user.email,
    roles: user.roles,
    accessToken: token
  })
}
