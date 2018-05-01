import React, { Component } from 'react'
//import './App.css';

import Home from './Home'
import Footer from './Footer'
import base from './base'
import NewAd from './NewAd'

import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {    
  
    render() {

        let index = 0
        
    return (
        <Router>
            <div className="App">
                <Route path='/' exact component={Home} />
                <Route path='/novo-anuncio' exact component={NewAd} />
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
