import React, { Component } from 'react'
//import './App.css';

import HeaderHome from './HeaderHome'
import AdHome from './AdHome'
import Categories from './Categories'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
        <div className="App">
            <HeaderHome />

            <div className="container">

                <h3>Últimos anúncios</h3>

                <div className="row">
                    <AdHome/>
                    <AdHome/>
                    <AdHome/>
                </div>

                <h3>Categorias</h3>

                <div className="row">
                    <Categories category ={{name: 'Bicicleta', icon: 'fa-car'}} />
                    <Categories category ={{name: 'Bicicleta', icon: 'fa-car'}} />
                    <Categories category ={{name: 'Bicicleta', icon: 'fa-car'}} />
                    <Categories category ={{name: 'Bicicleta', icon: 'fa-car'}} />
                </div>

            </div>

            <Footer/>

        </div>
    );
  }
}

export default App;
