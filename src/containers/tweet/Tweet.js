// Imports
import React, { Component } from 'react';

class Tweet extends Component {
    constructor(props) {
        super(props);

        // console.log(this.props.tweet);

        // created_at
        // favorite_count
        // retweet_count
        // text
        // user.name
        // user.screen_name
    }

    render() {
        return(
            <section id="tweets-section">
                {
                    this.props.value  + ' - ' +  this.props.tweet.full_text                    
                }
                {/* {
                    this.props.tweet.retweeted_status.full_text
                } */}
            </section>
        )
    }
}

export default Tweet;