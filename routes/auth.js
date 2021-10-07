var express = require('express');
var router = express.Router();

const registerController = require('../controllers/auth/register')
const loginController = require('../controllers/auth/login')

router.post('/register', registerController.store)
router.post('/login', loginController.index)

module.exports = router;
