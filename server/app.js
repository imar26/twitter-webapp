module.exports = function(app) {
    // Packages
    var Twitter = require('twitter');    

    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    // Rest API's
    app.get('/api/search', searchTweets);

    function searchTweets(req, res) {
        client.get('search/tweets', {q: req.query.hashtags, count: req.query.number, tweet_mode:'extended'}, function(error, tweets, response) {
            res.json(tweets);
        });      
    }
};