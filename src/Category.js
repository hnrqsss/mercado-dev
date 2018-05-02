import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import HeaderAd from './HeaderAd'
import Item from './Item'

class Category extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <HeaderAd />
                <div className='container' style={{paddingTop: '120px'}} >
                
                    <div className='row'>
                    
                        <div className='col-md-4'>
                        <h1>Categorias</h1>
                            <ul>
                            {this.props.categorias.map(
                                cat => {
                                    return (
                                        <li key={cat.url} ><Link to={`/categorias/${cat.url}`}>{cat.categoria}</Link></li>
                                    )
                                }
                            )}
                            </ul>
                        </div>

                        <div className='col-md-8'>
                            <Route path='/categorias/:urlcategoria' component={Item} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Category