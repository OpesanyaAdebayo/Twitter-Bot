let Twitter = require('twitter');

let client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const getTweets = (hashTags) => {
    let searchQuery = hashTags.join(" OR ");
    return new Promise((resolve, reject) => {
        client.get('search/tweets', {
            q: searchQuery, count: process.env.MAX_COUNT
        }, function (error, tweets) {
            if (error) {
                reject(Error(error));
            } else {
                resolve(tweets);
            }
        });
    });
};


module.exports = getTweets;