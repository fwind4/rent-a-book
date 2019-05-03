var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res, next) {
    models.Library.findAll({ where: { userId: req.user.id }, include: [models.Book] })
        .then(lib => {
            res.render('library/index', {lib});
        });
});

router.get('/get-books/:userId', function (req, res, next) {
    models.Library.findAll({ where: { userId: req.params.userId }, include: [models.Book] })
        .then(lib => {
            res.send(lib);
        });
});

router.get('/add', function (req, res, next) {
    res.render('library/add', {book: {}, title: 'Add Book', btn: 'Add'});
});

router.post('/add', function (req, res, next) {
    models.Book
        .create({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            path: req.body.path
        })
        .then(book => {
            models.Library.findOrCreate({ where: { bookId: book.id, userId: req.user.id } })
                .then(lib => { 
                    req.flash('success', 'Book created successfully.');
                    res.redirect('/library/update/' + book.id);
                });
        });
});

router.get('/update/:bookId', function (req, res, next) {
    models.Book.findOne({ where: { id: req.params.bookId } })
        .then((book) => {
            res.render('library/add', { book: book, title: 'Update Book', btn: 'Update' });
        }).catch((err) => {
            res.render('error', { message: 'Error', error: err });            
        });
});

router.post('/update/:bookId', function (req, res, next) {
    models.Book
        .findOne({ where: { id: req.params.bookId } }).then(book => {
            book.update({
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                path: req.body.path
            })
            .then(book => {
                models.Library.findOrCreate({ where: { bookId: book.id, userId: req.user.id } })
                    .then(lib => {
                        req.flash('success', 'Book created successfully.');
                        res.redirect('/library/update/' + book.id);
                    });
            })
        }).catch((err) => {
            res.render('error', { message: 'Error', error: err });
        });
});

module.exports = router;