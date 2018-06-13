// Imports
import React, { Component } from 'react';

// Presentational Component Imports
import Header from './presentational/header/Header';
import Footer from './presentational/footer/Footer';

// Container Component Imports
import Search from './containers/search/Search';
import TweetsList from './containers/tweetsList/TweetsList';

// Styles
import './app.scss';

// Main app component
class App extends Component {
    // Empty array declared for the tweets
    tweets = [];
    constructor() {
        super();
        // Define state, sort value is date by default
        this.state = {
            tweets: this.tweets,
            sort: 'date'
        };
    }

    // When tweets are sorted after user has clicked on the search button
    sortTweets(tweetlist, sort) {
        this.setState({
            tweets: tweetlist,
            sort: sort
        });
    }

    // When user requests for new tweets or changes the input values
    // User can change the sort option before searching to display already sorted tweets
    getTweets(tweetlist) {
        this.setState({
            tweets: tweetlist,
            sort: this.state.sort || 'date'
        });
    }

    // User changes the sort option before searching for the tweets
    updateSortValue(sortValue) {
        this.setState({
            sort: sortValue
        });
    }

    // Renders the UI
    render() {
        return(
            <div>
                <Header/>
                <Search getTweets={this.getTweets.bind(this)}/>
                <TweetsList tweets={this.state.tweets} sortTweets={this.sortTweets.bind(this)} 
                            sort={this.state.sort} updateSortValue={this.updateSortValue.bind(this)} />
                <Footer/>
            </div>
        )
    }
}

export default App;