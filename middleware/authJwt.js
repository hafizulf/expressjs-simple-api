require('dotenv').config()

// const { User } = require('../models')

const jwt = require('jsonwebtoken')

verifyToken = async(req, res, next) => {
  let token = req.headers['x-access-token']
  if (!token) return res.status(403).send({ message: 'No token provided!' })

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!'
      });
    }

    // user id can be use, next => something like to verify role
    req.userId = decoded.id
    next()
  })
}

const authJwt = { verifyToken }

module.exports = authJwt
