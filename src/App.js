// Imports
import React, { Component } from 'react';

// Component Imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Styles
import './app.scss';

class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default App;