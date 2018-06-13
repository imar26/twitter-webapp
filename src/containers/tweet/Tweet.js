// Imports
import React, { Component } from 'react';

// Import moment js
import moment from 'moment';

// Tweet Component
class Tweet extends Component {
    tweetText = '';
    constructor(props) {
        super(props);

        console.log(this.props.tweet);

        // Check if the tweet is not a retweet
        if(this.props.tweet.retweeted_status === undefined) {            
            // Display normal tweet
            this.tweetText = this.props.tweet.full_text;
        } else {
            // Display original tweet which has been retweeted (Note: Not directly using retweet text because it is truncated)
            this.tweetText = 'RT ' + this.props.tweet.retweeted_status.full_text;
        }
    }


    // Render Individual Tweet
    render() {
        // Formatting the date
        let date = this.props.tweet.created_at;
        let dateFormat = moment(date).format('LL');
        return(
            <div className="clearfix tweet">
                <div className="left-section">
                    <img src={this.props.tweet.user.profile_image_url_https.replace('_normal', '')} alt={this.props.tweet.user.name + '-img'} />
                </div>
                <div className="right-section">
                    <span className="calendar"><i className="fa fa-calendar" aria-hidden="true"></i> {dateFormat}</span>
                    <h4>{this.props.tweet.user.name} <span>@{this.props.tweet.user.screen_name}</span></h4>
                    <p>{this.tweetText}</p>
                    <span className="retweet"><i className="fa fa-retweet" aria-hidden="true"></i> {this.props.tweet.retweet_count}</span>
                    <span className="favourite"><i className="fa fa-heart" aria-hidden="true"></i> {this.props.tweet.favorite_count}</span>                    
                </div>
            </div>
        )
    }
}

export default Tweet;