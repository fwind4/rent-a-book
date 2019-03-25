var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rent a book' });
});

router.get('/users', function(req, res, next) {
  models.User.findAll().then(function (users) {
    res.send(users);
  });
});


module.exports = router;
