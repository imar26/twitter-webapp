// Imports
import React, { Component } from 'react';

// Component Imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Container Imports
import Search from './containers/search/Search';

// Styles
import './app.scss';

class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Search/>
                <Footer/>
            </div>
        )
    }
}

export default App;