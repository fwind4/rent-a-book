var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController');
var LibraryController = require('../controllers/libraryController');

/* GET home page. */
router.get('/', function (req, res, next) {
	
	res.render('index', { title: 'homepage' });
});

router.use('/user', UserController);

router.use('/library', LibraryController);

module.exports = router;
