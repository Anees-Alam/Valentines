var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'home'});
});

/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'projects'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'contact me'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'about me'});
});


module.exports = router;
