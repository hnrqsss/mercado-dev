import React,{Component} from 'react'

import HeaderHome from './HeaderHome'
import AdHome from './AdHome'
import Categories from './Categories'
import base from './base'


class Home extends Component{

    constructor(propos){
        super(propos)

        this.state = {
            categorias : [],
            anuncios: []
        }
        base.bindToState('categorias',{
            context: this,
            state: 'categorias'
        })

        base.bindToState('anuncios',{
            context: this,
            state: 'anuncios',
            queries: {
                limitToLast: 3
            }
        })
    }
    render(){
        let index = 0
        return (
            <div>

                <HeaderHome />

                <div className="container">

                    <h3>Últimos anúncios</h3>

                    <div className="row">
                        {this.state.anuncios.map( (ad,indice) => {
                            return <AdHome anuncio={ad} key={indice} />
                        })}
                    </div>

                    <h3>Categorias</h3>

                    <div className="row">
                        {this.state.categorias.map( (cat,indice) => {
                            return [
                                <Categories categoria={cat} key={indice} />,
                                ++index%4 === 0 && <div className="w-100" key={'c'+indice}></div>
                            ]
                        })}
                    </div>

                </div>
            </div>
        )

    }
       
}

export default Home