// Imports
import React, { Component } from 'react';

// Import Containers
import Tweet from '../tweet/Tweet';

class Tweets extends Component {
    render() {
        return(
            <section id="tweets-section">
                <div className="tweet-list">
                    <div className="tweet">
                        {
                            this.props.tweets.map((tweet, i) => {
                                return <Tweet tweet={tweet} value={i + 1} key={tweet.id} />
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Tweets;