var express = require('express');
var router = express.Router();
let formatInput = require("../helpers/formatInput");
let getTweets = require("../helpers/twitter");
let filterUsers = require("../helpers/filterUsers");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Twitter Bot'
  });
});

/* POST to home page. */
router.post('/', function (req, res, next) {
  let formattedHashTags = formatInput(req.body.twitterHashTags);
  getTweets(formattedHashTags).then(tweets => filterUsers(tweets.statuses))
  .catch((error) => console.log(error));
});

module.exports = router;