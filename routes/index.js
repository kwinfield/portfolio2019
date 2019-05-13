const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index');
});

router.get('/projects', (req, res) => {
  res.send('This is the projects page');
});

router.get('/contact', (req, res) => {
  res.send('This is the Contact form page');
});

router.get('/resume', (req, res) => {
  res.send('This is where my resume will load');
});

module.exports = router;
