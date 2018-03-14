var express = require('express');
var router = express.Router();
let Twitter = require('twitter');

let client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
// let twitter = require("../helpers/twitter");
let formatInput = require("../helpers/formatInput");
let filterUsers = require("../helpers/filterUsers");
let sheets = require("../helpers/sheets");


router.get('/', function (req, res, next) {
    let hashTags = req.session.hashTags;
    let formattedHashTags = formatInput(hashTags);
    let searchQuery, stream;

    if(formattedHashTags.length <2) {
        searchQuery = formattedHashTags[0];
    }
    else {
        searchQuery = hashTags.join(" OR ");
    }

    client.stream('statuses/filter', {track: searchQuery}, (stream) => {
        stream.on('data', function(tweets) {
            let userData =[tweets.user.screen_name,tweets.user.name,tweets.user.followers_count];
            client.currentTweetStream = stream;
            sheets([userData]).catch((err) => {
                console.log(err);
                stream.destroy();
            });
        });
        stream.on('error', function(error) {
            console.log(error);
          });

    });

    res.render('success', {
        title: 'Twitter Bot'
    });

});



module.exports = router;