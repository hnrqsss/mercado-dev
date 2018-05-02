import React, { Component } from 'react'
import axios from 'axios'

import AdHome from './AdHome'

class Item extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            anuncios: {

            }
        }

        this.loadAnuncios = this.loadAnuncios.bind(this)

        this.loadAnuncios(this.props.match.params.urlcategoria)
    }

    loadAnuncios(urlcategoria){
        
        const url = `https://mercadodev-846c7.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${urlcategoria}%22`
        axios
            .get(url)
            .then( ad => {
                this.setState({anuncios: ad.data })
                this.categoria = urlcategoria
            }
        
        )}

    componentWillReceiveProps(newProps){
        if(newProps.match.params.urlcategoria){
            if(this.categoria !== newProps.match.params.urlcategoria){
                this.loadAnuncios(newProps.match.params.urlcategoria)
            }
        }
    }

    render(){
        return (
            <div>
                <h1>{JSON.stringify(this.props.match.params.urlcategoria)}</h1>
                    <div className="row">
                    {Object.keys(this.state.anuncios).map( key => {
                        const anuncio = this.state.anuncios[key]
                        return <AdHome anuncio={anuncio} key={key} />

                    })}
                </div>
                

            </div>
        )
    } 
   
}

export default Item
