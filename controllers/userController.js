var express = require('express');
var router = express.Router();
var models = require('../models');
require('./app/config/passport.js')(passport, models.user);

passport.use(new LocalStrategy(
    function (email, password, done) {
        models.User.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

router.get('/', function (req, res, next) {
    res.render('index', { title: 'User space' });
});

router.get('/list', function (req, res, next) {
    models.User.findAll().then((users) => {
        res.send(users);
    }).catch((err) => {
        res.render('error', {message: 'Error', error: err});        
    });
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/user/list',
    failureRedirect: '/user/signup'
}));

//app.get('/profile', isLoggedIn, authController.dashboard);

//app.get('/logout', authController.logout);

app.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/user/list',
    failureRedirect: '/user/login'
}));


function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/login');

}
module.exports = router;