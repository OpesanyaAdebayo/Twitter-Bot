var express = require('express');
var router = express.Router();
let google = require("../helpers/google");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Twitter Bot'
  });
});

/* POST to home page. */
router.post('/', function (req, res, next) {
  let hashTags = req.body.twitterHashTags;
  req.session.hashTags = hashTags;
  google.checkToken().then((response) => {
    // console.log(response);
    if (response.credentials === undefined) {
      res.json({
        message: "To continue, please click the link below.",
        url: response
      });
    } else {
      res.json({action: "Redirect"});
    }
  });
});

module.exports = router;