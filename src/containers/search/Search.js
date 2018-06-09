import React, { Component } from 'react';

class Search extends Component {
    render() {
        return(
            <section id="search-section">
                <div>
                    <h4>Search Tweets</h4>
                    <form id="search-form" className="clearfix">
                        <div className="form-group">
                            <input type="text" placeholder="Enter Hashtags" className="form-control" />
                            <label>Format: #hashtag1 #hashtag2</label>
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder="Enter Number of Tweets" className="form-control" 
                            defaultValue="15" min="1" max="100" />
                            <label>Number of Tweets (Default: 15, Max: 100)</label>
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option value="mixed">Mixed</option>
                                <option value="recent">Recent</option>
                                <option value="popular">Popular</option>
                            </select>
                            <label>Type of Tweets</label>
                        </div>
                        <div className="form-group">
                            <button type="submit">Search Tweets</button>
                            <button type="submit">Clear</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Search;