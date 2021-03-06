import React, { Component } from 'react'
//import './App.css';

import Home from './Home'
import Footer from './Footer'
import base from './base'
import NewAd from './NewAd'
import Category from './Category'

import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {   
    constructor(props) {
        super(props)
        
        this.state = {
            categorias : []
        }

        base.bindToState('categorias',{
            context: this,
            state: 'categorias'
        })
    }
  
    render() {

        let index = 0
    return (
        <Router>
           
            <div className="App">
                <Route path='/' exact render={() => <Home categorias={this.state.categorias} /> } />
                <Route path='/novo-anuncio' exact render={ () => <NewAd categorias={this.state.categorias} /> } />
                <Route path='/categorias'  render={() => <Category categorias={this.state.categorias} /> } />
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
