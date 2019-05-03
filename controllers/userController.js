var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('passport');
require('../config/passport.js')(passport, models.User);



router.get('/', isLoggedIn, function (req, res, next) {
    models.User.findAll().then((users) => {
        res.render('user/index', { users });
    }).catch((err) => {
        res.render('error', { message: 'Error', error: err });
    });
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

router.post('/signup', function (req, res, next) {
    if (req.body.psw === req.body.pswrepeat) {
        next();
    } else {
        req.flash('error', 'Passwords must match!');
        res.render('signup');
    }
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/profile',  isLoggedIn, function (req, res, next) {
    res.render('profile');    
});

router.post('/profile', isLoggedIn, function (req, res, next) {
    if (req.body.psw === req.body.pswrepeat) {
        next();
    } else {
        req.flash('error', 'Passwords must match!');
        res.render('profile');
    }
});

router.post('/profile', isLoggedIn, passport.authenticate('local-update', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/profile',
    failureFlash: true
}));

router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/login',
    failureFlash: true
}));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/user/login');
}

module.exports = router;