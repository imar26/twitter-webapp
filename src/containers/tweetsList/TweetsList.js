// Imports
import React, { Component } from 'react';

// Import Containers
import Tweet from '../tweet/Tweet';


// TweetsList Component
class TweetsList extends Component {
    // Function called when user sorts tweets after they are displayed
    sortTweets() {
        let sortValue = this.refs.sortValue.value;
        // Check if tweets are already displayed
        if(this.props.tweets.length > 0) {
            this.sortTweetsBeforeRendering();
        } else {
            // If user just changes the sort value before searching for the tweets
            this.props.updateSortValue(sortValue);
        }
        
        // Pass tweets and sort value to parent component to update the state
        this.props.sortTweets(this.props.tweets, sortValue);
    }

    // Function to display tweets
    renderTweets() {
        // Sort tweets before displaying if the user has specified the sort metric
        this.sortTweetsBeforeRendering();

        // Check if tweets array is not empty
        if(this.props.tweets.length > 0) {
            return this.props.tweets.map((tweet, i) => {
                return <Tweet tweet={tweet} value={i + 1} key={tweet.id} />
            })
        } else {
            return <p>No Tweets Found.</p>
        }
    }

    // Function to sort tweets based on the sort value
    sortTweetsBeforeRendering() {
        if(this.props.sort === 'date') {
            this.props.tweets.sort(function(a, b) {
                return b.id - a.id;
            });
        } else if(this.props.sort === 'retweets') {
            this.props.tweets.sort(function(a, b) {
                return b.retweet_count - a.retweet_count;
            });            
        } else if(this.props.sort === 'favourites') {
            this.props.tweets.sort(function(a, b) {
                return b.favorite_count - a.favorite_count;
            });
        }
    }

    // Display Tweets on the UI
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