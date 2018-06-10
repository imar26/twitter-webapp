// Imports
import React, { Component } from 'react';

// Component Imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Container Imports
import Search from './containers/search/Search';
import Tweets from './containers/tweets/Tweets';

// Styles
import './app.scss';

class App extends Component {
    tweets = [];
    constructor() {
        super();

        this.state = {
            tweets: this.tweets
        }
    }

    getTweets(tweetlist) {
        this.setState({
            tweets: tweetlist
        })
    }

    render() {
        return(
            <div>
                <Header/>
                <Search getTweets={this.getTweets.bind(this)}/>
                <Tweets tweets={this.state.tweets}/>
                <Footer/>
            </div>
        )
    }
}

export default App;