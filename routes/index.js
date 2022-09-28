var express = require('express');
var router = express.Router();


function testFunction() {
  return 'This is a test of calling functions from templates with Handlebars!';
}
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.name) {
    res.render('index', { 
      title: 'Express Test',
      name: req.session.name,
      testFunction: testFunction,
      nightMode: req.session.nightMode,
      authenticated: Boolean(req.session.name),
    });
  } else {
    res.redirect('/authentication');
  }
});

router.post('/nightMode', function(req, res, next) {
  if(req.body.changeNightMode) {
    req.session.nightMode = !req.session.nightMode;
  }
  res.redirect('/')
});

module.exports = router;
