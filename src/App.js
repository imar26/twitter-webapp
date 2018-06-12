// Imports
import React, { Component } from 'react';

// Component Imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Container Imports
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

    // When tweets are sorted
    sortTweets(tweetlist, sort) {
        this.setState({
            tweets: tweetlist,
            sort: sort
        });
    }

    // When user requests for new tweets (changes the input field)
    getTweets(tweetlist) {
        this.setState({
            tweets: tweetlist,
            sort: this.state.sort || 'date'
        });
    }

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