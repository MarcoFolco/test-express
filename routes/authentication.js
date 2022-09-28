var express = require('express');
var router = express.Router();

/* GET available discounts. */
router.get('/', function(req, res, next) {
    res.render('formLogin', {
        authenticated: Boolean(req.session.name),
        name: req.session.name,
    })
});

router.post('/login', function(req, res, next) {
    if(req.body.name) {
        req.session.name = req.body.name;
    }
    res.redirect('/');
});

router.get('/logout', function(req, res, next) {
    req.session.destroy();
    res.redirect('.');
});

module.exports = router;
