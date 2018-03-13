let Twitter = require('twitter');

let TWITTER_CONSUMER_KEY = "UZp1BOGMpYwtqPcePGDh4ODUv";
let TWITTER_CONSUMER_SECRET = "vHu4f65E2BCk8urJ9IPCq5yDfV9F5aOx7EyGfrAbctlRfIbsNV";
let TWITTER_ACCESS_TOKEN = "2481818113-j1NjF6wB6Ko9crDKUrUo2LA5nMEyqlflZvg3Zqb";
let TWITTER_ACCESS_TOKEN_SECRET = "haCvnGZ79G1e5nc9xlKGH56DOLKwXBbZXJASdQO8gHs5W";

let client = new Twitter({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token_key: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});

client.get('search/tweets', {q: 'node.js'}, function(error, tweets) {
    console.log(tweets.statuses.length);
 });