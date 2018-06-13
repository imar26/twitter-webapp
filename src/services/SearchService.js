// Imports
import axios from 'axios';

// Create Service as a Singleton Object
let _singleton = Symbol();

class SearchService {
    // Origin URL for making Restful API
    baseUrl = '';

    constructor(singletonToken) {
        if (_singleton !== singletonToken) {
            throw new Error("Cannot directly instantiate");
        }
    }
    
    static get instance() {
        if (!this[_singleton]) {
            this[_singleton] = new SearchService(_singleton);
        }
        return this[_singleton];
    }

    // Search Tweets Service
    searchTweets(data) {   
        // Create Origin URL based on the Environment  
        if(process.env.NODE_ENV === 'development') {
            // For Local
            this.baseUrl = "http://localhost:5000";
        } else {
            // For Production
            this.baseUrl = "";
        }

        // Create Restful API Endpoint
        let url = this.baseUrl + "/api/search";

        return axios.get(url, {
                params:data
            })
            .then((response) => {
                // Return Tweets
                return response.data.statuses;
            });
    }
}

export default SearchService;