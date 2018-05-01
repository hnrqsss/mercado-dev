import React,{Component} from 'react'

import HeaderHome from './HeaderHome'
import AdHome from './AdHome'
import Categories from './Categories'
import base from './base'


class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            anuncios: []
        }

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
                        {Object.keys(this.state.anuncios).map( key => {
                            const ad = this.state.anuncios[key]
                            return <AdHome anuncio={ad} key={key} />
                        })}
                    </div>

                    <h3>Categorias</h3>

                    <div className="row">
                        {this.props.categorias.map( (cat,indice) => {
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