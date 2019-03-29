var express = require('express');
var router = express.Router();
var models = require('../models');

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

router.post('/signup', function (req, res, next) {
    console.log(req.body);    
    res.send(req.body);
});

router.get('/login', function (req, res, next) {
    res.render('signup');
});

router.post('/login', function (req, res, next) {
    
});

module.exports = router;