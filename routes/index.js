var express = require('express');
const csrf = require('csurf');
var router = express.Router();
const app = express();

// Set up CSRF protection middleware
const csrfProtection = csrf({ cookie: true });

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

// Define a route handler for the form submission
router.post('/submit-answer', function(req, res) {
  // Handle the form submission here
  // For demonstration purposes, let's just log the submitted data
  //console.log('Form submitted with data:', req.body);
  // Send a response
  //res.send('Form submitted successfully!');
});

module.exports = router;



