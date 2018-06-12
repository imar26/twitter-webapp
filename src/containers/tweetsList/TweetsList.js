// Imports
import React, { Component } from 'react';

// Import Containers
import Tweet from '../tweet/Tweet';

class TweetsList extends Component {
    sortTweets() {
        let sortValue = this.refs.sortValue.value;

        if(sortValue === 'date') {
            this.props.tweets.sort(function(a, b) {
                return b.id - a.id;
            });
        } else if(sortValue === 'retweets') {
            this.props.tweets.sort(function(a, b) {
                return b.retweet_count - a.retweet_count;
            });            
        } else if(sortValue === 'favourites') {
            this.props.tweets.sort(function(a, b) {
                return b.favorite_count - a.favorite_count;
            });
        }
        
        this.props.sortTweets(this.props.tweets, sortValue);
    }

    renderTweets() {
        if(this.props.tweets.length > 0) {
            return this.props.tweets.map((tweet, i) => {
                return <Tweet tweet={tweet} value={i + 1} key={tweet.id} />
            })
        } else {
            return <p>No Tweets Found.</p>
        }
    }

    render() {
        return(
            <section id="tweets-section">
                <div className="tweet-list">
                    <h3>List of Tweets</h3>
                    <div className="sorting">
                        <label>Sort By: </label>
                        <select name="sortValue" id="sortValue" ref="sortValue" value={this.props.sort} onChange={this.sortTweets.bind(this)}>
                            <option value="date">
                                Date
                            </option>
                            <option value="retweets">
                                Retweets
                            </option>
                            <option value="favourites">
                                Favourites
                            </option>
                        </select>
                    </div>
                    <div>
                        {
                            this.renderTweets()
                        }
                    </div>                    
                </div>
            </section>
        )
    }
}

export default TweetsList;