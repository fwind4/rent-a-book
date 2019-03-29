var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('passport');
require('../config/passport.js')(passport, models.User);



router.get('/', function (req, res, next) {
    res.render('index', { title: 'User space' });
});

router.get('/list', function (req, res, next) {
    models.User.findAll().then((users) => {
        res.send(users);
    }).catch((err) => {
        res.render('error', { message: 'Error', error: err });
    });
});

router.get('/signup', function (req, res, next) {
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/user/list',
    failureRedirect: '/user/signup'
}));

router.get('/login', function (req, res, next) {
    res.render('signup');
});

router.post('/login', function (req, res, next) {
    
});

module.exports = router;