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
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/profile',  isLoggedIn, function (req, res, next) {
    res.render('profile');    
});

router.post('/profile', isLoggedIn, function (req, res, next) {
    console.log(req.body);
    
});

router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/user/list',
    failureRedirect: '/user/login',
    failureFlash: true
}));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/user/login');
}

module.exports = router;