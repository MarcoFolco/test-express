var express = require('express');
var router = express.Router();
var travelsRouter = require('./travels');
var discountsRouter = require('./discounts');

/* Works as a main router for all the API routes. */
router.use('/travels', travelsRouter);
router.use('/discounts', discountsRouter);
router.use('/',(req,res,next) => {
    res.redirect('/api/travels/');
});

module.exports = router;
