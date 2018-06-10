// Imports
import React, { Component } from 'react';

// Import Services
import SearchService from '../../services/SearchService';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweetLists: []
        }

        this.searchService = SearchService.instance;
    }

    searchTweets(event) {
        event.preventDefault();
        let hashtags = this.refs.hashtags.value; //.trim()
        let hashtagArray = hashtags.split(" ");
        let searchValue = "";
        for(let i=0; i<hashtagArray.length; i++) {
            if(i === hashtagArray.length - 1) {
                searchValue += hashtagArray[i] + ' -RT';
            } else {
                searchValue += hashtagArray[i] + ' OR ';
            }
        }

        let number = this.refs.number.value;
        
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
                        </div>
                        <div className="form-group">
                            <input type="number" ref="number" placeholder="Enter Number of Tweets" className="form-control" 
                            defaultValue="15" min="1" max="100" />
                            <label>Number of Tweets (Default: 15, Max: 100)</label>
                        </div>
                        {/* <div className="form-group">
                            <select className="form-control">
                                <option value="mixed">Mixed</option>
                                <option value="recent">Recent</option>
                                <option value="popular">Popular</option>
                            </select>
                            <label>Type of Tweets</label>
                        </div> */}
                        <div className="form-group">
                            <button type="submit">Search Tweets</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Search;