var express = require('express');
var router = express.Router();
let google = require("../helpers/google");

/* GET users listing. */
router.get('/', function(req, res, next) {
  let oauth2Client  = google.getOAuthClient();
  let code = req.query.code;

  oauth2Client.getToken(code, (err, token) => {
    if(err) {
      res.json({message: "There was an error. Please, try again."});
    }
    google.saveToken(token).then(() =>{
      res.redirect("/success");
    }).catch(err => {
      console.log(err);
      res.json({message: "There was an error. Please, try again."});
    });
  });
});

module.exports = router;
