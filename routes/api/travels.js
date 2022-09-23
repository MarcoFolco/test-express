var express = require('express');
var router = express.Router();

/* GET available travels. */
router.get('/', function(req, res, next) {
  res.json({
    place: 'Example place',
    assets: 'Offered assets',
    date: 'Date of travel',
    price: 'Price',
  });
});

module.exports = router;
