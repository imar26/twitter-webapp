// Imports
import React, { Component } from 'react';

class Tweet extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.tweet);

        // created_at
        // favorite_count
        // retweet_count
        // text
        // user.name
        // user.screen_name
    }

    render() {
        return(
            <div className="clearfix tweet">
                <div className="left-section">
                    <img src={this.props.tweet.user.profile_image_url_https.replace('_normal', '')} />
                </div>
                <div className="right-section">
                    <h4>{this.props.tweet.user.name} <span>@{this.props.tweet.user.screen_name}</span></h4>
                    <p>{this.props.tweet.full_text}</p>
                    <span>Total Retweets: {this.props.tweet.retweet_count}</span>
                    <span>Total Favourites: {this.props.tweet.favorite_count}</span>
                    <span>Tweeted at: {this.props.tweet.created_at}</span>
                </div>
                {/* {
                    this.props.tweet.retweeted_status.full_text
                } */}
            </div>
        )
    }
}

export default Tweet;