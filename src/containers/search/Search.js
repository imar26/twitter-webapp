// Imports
import React, { Component } from 'react';

// Import Services
import SearchService from '../../services/SearchService';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweetLists: [],
            hashError: false,
            hashMessage: '',
            numError: false,
            numMessage: '',
        }

        this.searchService = SearchService.instance;
    }

    searchTweets(event) {
        event.preventDefault();
        let hashtags = this.refs.hashtags.value; //.trim()
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
                // Add all the hashtags from the input
                searchValue += hashtagArray[i] + ' OR ';
            }

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

        let number = this.refs.number.value;
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
        
        let data = {
            hashtags: searchValue,
            number: number
        }

        this.searchService.searchTweets(data)
            .then((response) => {           
                this.setState({
                    tweetLists: response
                });

                this.props.getTweets(this.state.tweetLists);
            });                            
    }

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
                        {/* <div className="form-group">
                            <select className="form-control">
                                <option value="mixed">Mixed</option>
                                <option value="recent">Recent</option>
                                <option value="popular">Popular</option>
                            </select>
                            <label>Type of Tweets</label>
                        </div> */}
                        <div className="btn-group">
                            <button type="submit">Search Tweets</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Search;