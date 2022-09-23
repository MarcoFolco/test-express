var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var fileName = 'contact-image.png';
  res.sendFile(path.join(__dirname, '../public/images/', fileName), function (err) {
    if (err) {
      next(err) // --> This error gets handled by the handler defined in app.js
    } else {
      console.log('Sent:', fileName)
    }
  });
});
module.exports = router;
