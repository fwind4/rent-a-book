var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.use('/user', UserController);

module.exports = router;
