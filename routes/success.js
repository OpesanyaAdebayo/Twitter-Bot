var express = require('express');
var router = express.Router();
let twitter = require("../helpers/twitter");
let formatInput = require("../helpers/formatInput");
let filterUsers = require("../helpers/filterUsers");
/* GET home page. */
router.get('/', function (req, res, next) {
    let hashTags = req.session.hashTags;
    let formattedHashTags = formatInput(hashTags);
    let userData;
    twitter(formattedHashTags).then((tweets) => {
        userData = filterUsers(tweets.statuses);
    }).catch((error) => {
        console.log(error);
    });

    

    res.render('success', {
        title: 'Twitter Bot'
    });
});

router.post('/', function (req, res, next) {

});

module.exports = router;