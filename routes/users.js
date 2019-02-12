var express = require('express');
var router = express.Router();
var UserModel = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var user = new UserModel();
    var newPwd = user.hashPassword('123456');
    console.log(newPwd);
    res.send(newPwd);
});

router.get('/check-pwd', function(req, res, next) {
  var user = new UserModel();
  res.send(user.verifyPassword('1234567', '$2b$10$c2eZLvRap/VTmOvHZZUdYuhhRQKJ1Im5k95C/dmcqyPDa3rj93h/G'));
});

module.exports = router;
