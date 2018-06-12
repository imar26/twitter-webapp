// Imports
import axios from 'axios';

let _singleton = Symbol();

class SearchService {
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

    searchTweets(data) {     
        console.log(process.env.NODE_ENV);   
        if(process.env.NODE_ENV === 'development') {
            // For Local
            this.baseUrl = "http://localhost:5000";
        } else {
            // For Production
            this.baseUrl = "";
        }

        let url = this.baseUrl + "/api/search";

        return axios.get(url, {
                params:data
            })
            .then((response) => {
                return response.data.statuses;
            });
    }

}

export default SearchService;