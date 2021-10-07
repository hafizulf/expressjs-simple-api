const { User } = require('../../models')

const Validator = require('fastest-validator')
const validation = new Validator()

const bcrypt = require('bcrypt')

module.exports.store = async(req, res) => {
  const schema = {
    username: 'string',
    email: 'email',
    password: "string|min:6",
    role: "number|integer"
  }

  const validate = validation.validate(req.body, schema)
  if (validate.length) return res.json(validate)

  // check existing username and email
  const checkUsername = await User.findOne({ where: { username: req.body.username } })
  if (checkUsername) return res.json({ message: "Username is already exist!" })

  const checkEmail = await User.findOne({ where: { email: req.body.email } })
  if (checkEmail) return res.json({ message: "Email is already exist!" })

  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role: req.body.role
  })

  res.json({ message: "User was registered successfully!" })
}
