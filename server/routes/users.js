var express = require('express');
var router = express.Router();
const Controller = require('../controllers/users')

router
      .post('/register', Controller.register)
      .post('/login', Controller.login)
      .post('/loginFb', Controller.loginFb)


module.exports = router;
