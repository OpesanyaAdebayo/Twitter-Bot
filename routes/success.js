var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if(!req.session.formattedHashTags) {
        res.redirect('/');
    }
    
    res.render('success', {
        title: 'Twitter Bot'
    });
});

router.post('/', function (req, res, next) {

});

module.exports = router;