var express = require('express');
var router = express.Router();
let twitter = require("../helpers/twitter");
let formatInput = require("../helpers/formatInput");
let filterUsers = require("../helpers/filterUsers");
let sheets = require("../helpers/sheets");


router.get('/', function (req, res, next) {
    let hashTags = req.session.hashTags;
    let formattedHashTags = formatInput(hashTags);
    let userData;

    twitter(formattedHashTags)
        .then((tweets) => {
            userData = filterUsers(tweets.statuses);
            return userData;
        }).then(() => sheets(userData))
        .then(() => {
            res.render('success', {
                title: 'Twitter Bot'
            });
        })
        .catch(error => console.log(error));

});



module.exports = router;