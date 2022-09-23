var express = require('express');
var router = express.Router();

/* GET available discounts. */
router.get('/', function(req, res, next) {
  res.json({
    enterprise: 'Example enterprise',
    places: 'Places where the discounts apply',
    amount: 'Percentage of the discount', 
  });
});

module.exports = router;
