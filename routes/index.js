var express = require('express');
var router = express.Router();
let formatInput = require("../helpers/formatInput");
let getTweets = require("../helpers/twitter");
let filterUsers = require("../helpers/filterUsers");
let google = require("../helpers/google");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Twitter Bot'
  });
});

/* POST to home page. */
router.post('/', function (req, res, next) {
  let formattedHashTags = formatInput(req.body.twitterHashTags);

  google.checkToken().then((response) => {
    // console.log(response);
    if (response.credentials === undefined) {
      res.json({
        message: "To continue, please click the link below.",
        url: response
      });
    } else {
      res.redirect('/success');
    }
  });
});

module.exports = router;