// Imports
import React, { Component } from 'react';

class Tweet extends Component {
    tweetText = '';
    constructor(props) {
        super(props);

        // Check if the tweet is a retweet
        if(this.props.tweet.retweeted_status === undefined) {            
            // Display normal tweet
            this.tweetText = this.props.tweet.full_text;
        } else {
            // Display original tweet which has been retweeted (Note: Not using retweet because the text is truncated)
            this.tweetText = this.props.tweet.retweeted_status.full_text;
        }

        console.log(this.props.tweet);
    }

    render() {
        return(
            <div className="clearfix tweet">
                <div className="left-section">
                    <img src={this.props.tweet.user.profile_image_url_https.replace('_normal', '')} alt={this.props.tweet.user.name + '-img'} />
                </div>
                <div className="right-section">
                    <h4>{this.props.tweet.user.name} <span>@{this.props.tweet.user.screen_name}</span></h4>
                    <p>{this.tweetText}</p>
                    <span><strong>Total Retweets:</strong> {this.props.tweet.retweet_count}</span>
                    <span><strong>Total Favourites:</strong> {this.props.tweet.favorite_count}</span>
                    <span><strong>Tweeted at:</strong> {this.props.tweet.created_at}</span>
                </div>
            </div>
        )
    }
}

export default Tweet;