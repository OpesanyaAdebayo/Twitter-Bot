const _ = require('lodash');

const filterUsers = (tweets) => {
    let users = tweets.map((tweet) => [
        tweet.user.screen_name, tweet.user.name, tweet.user.followers_count
    ]);

    const uniqueUsers = _.uniqWith(users, _.isEqual); //make sure there are no repetitions

    return uniqueUsers;
};

module.exports = filterUsers;