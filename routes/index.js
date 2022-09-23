var express = require('express');
var router = express.Router();


function testFunction() {
  return 'This is a test of calling functions from templates with Handlebars!';
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Prueba de Express',
    testFunction: testFunction,
  });
});

module.exports = router;
