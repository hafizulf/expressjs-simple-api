var express = require('express');
var router = express.Router();

const registerController = require('../controllers/auth/register')

router.post('/register', registerController.store)

module.exports = router;
