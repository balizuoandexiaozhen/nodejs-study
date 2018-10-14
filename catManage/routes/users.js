var express = require('express');
var router = express.Router();
var usersController = require('../controller/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/islogin', usersController.isLogin)
router.get('/logout', usersController.logout)


module.exports = router;
