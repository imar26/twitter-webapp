// Imports
import React, { Component } from 'react';

// Import Services
import SearchService from '../../services/SearchService';

// Search Component
class Search extends Component {
    constructor(props) {
        super(props);

        // Define State
        this.state = {
            tweetLists: [],
            hashError: false,
            hashMessage: '',
            numError: false,
            numMessage: '',
        }

        // Instance of singleton object
        this.searchService = SearchService.instance;
    }

    // User clicks on Search Tweets button
    searchTweets(event) {
        event.preventDefault();
        // Remove head and trail spaces from the input
        let hashtags = this.refs.hashtags.value.trim();
        // Convert this String input into an Array
        let hashtagArray = hashtags.split(" ");
        let searchValue = "";
        let hashInput = false;
        for(let i=0; i<hashtagArray.length; i++) {
            // Check if hashtag length is less than or equal to one
            // Check if hashtag value starts with a #
            if(hashtagArray[i].indexOf("#") !== 0 || hashtagArray[i].length <= 1) {
                hashInput = true;
            }
            
            // Check if the hashtag is valid (remove special characters)
            if(!/^#\w+$/g.test(hashtagArray[i])) {
                hashInput = true;
            }

            // Generate the text which will be used to search tweets using Twitter API
            if(i === hashtagArray.length - 1) {
                // If it is the last hashtag, do not append 'OR' at the end
                searchValue += hashtagArray[i];
            } else {
                // Add all the hashtags from the input array
                searchValue += hashtagArray[i] + ' OR ';
            }

            // If there are any errors related to the hashtag input
            if(hashInput === true) {
                this.setState({
                    hashError: true,
                    hashMessage: 'Invalid Hashtags'
                });

                setTimeout(() => {
                    this.setState({
                        hashError: false,
                        hashMessage: ''
                    });
                }, 3000);

                return false;
            }
        }

        // If there are any errors related to the number of tweets input
        let number = this.refs.number.value;
        // Only accept numbers
        if(number.replace(/[^\d.-]/g,'') < 1 || number.replace(/[^\d.-]/g,'') > 100) {
            this.setState({
                numError: true,
                numMessage: 'Invalid number'
            });

            setTimeout(() => {
                this.setState({
                    numError: false,
                    numMessage: ''
                });
            }, 3000);

            return false;
        }
        
        // Create JSON Object
        let data = {
            hashtags: searchValue,
            number: number
        }

        // Make a request and get tweets based on the input
        this.searchService.searchTweets(data)
            .then((response) => {           
                this.setState({
                    tweetLists: response
                });

                // Pass on the tweets to the parent component to update the state
                this.props.getTweets(this.state.tweetLists);
            });                            
    }

    // Render Search Form on the UI
    render() {
        return(
            <section id="search-section">
                <div>
                    <h4>Search Tweets</h4>
                    <form id="searchForm" className="clearfix" onSubmit={this.searchTweets.bind(this)}>
                        <div className="form-group">
                            <input type="text" ref="hashtags" placeholder="Enter Hashtags" className="form-control" />
                            <label>Format: #hashtag1 #hashtag2</label>
                            <span className={`error ${this.state.hashError} ? 'visible' : 'hide`}>{this.state.hashMessage}</span>
                        </div>
                        <div className="form-group">
                            <input type="number" ref="number" placeholder="Enter Number of Tweets" className="form-control" 
                            defaultValue="15" />
                            <label>Number of Tweets (Max: 100)</label>
                            <span className={`error ${this.state.numError} ? 'visible' : 'hide`}>{this.state.numMessage}</span>
                        </div>
                        <div className="btn-group">
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i>Search Tweets</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Search;