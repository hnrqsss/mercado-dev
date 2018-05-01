import React, { Component } from 'react'

import HeaderAd from './HeaderAd'
import base, { storage } from './base'


class NewAd extends Component{

    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event){
        const newAd = {
            nome : this.nome.value,
            descricao: this.descricao.value,
            preco: this.preco.value,
            telefone: this.telefone.value,
            vendedor: this.vendedor.value,
            foto: 'http://placehold.it/200x140'
        }
        
        base.push('anuncios',{
            data: newAd
        }, (err) => {
            if(err){
    
            }else{
    
            }
        })

        event.preventDefautl()
    }

    render(){
    
        return(

            <div className="container" style={{paddingTop:'120px'}} >
                <HeaderAd />
                <h1>Novo Anúncio</h1>

                <form onSubmit={this.handleSubmit} >

                    <div className="form-group">
                        <label htmlFor='nome'>Nome</label>
                        <input type='text' className='form-control' id='nome' placeholder='nome' ref={ (ref) => this.nome = ref } />
                    </div>

                    <div className="form-group">
                        <label htmlFor='descricao'>Descrição</label>
                        <input type='text' className='form-control' id='descricao' placeholder='descricao' ref={ (ref) => this.descricao = ref } />
                    </div>

                    <div className="form-group">
                        <label htmlFor='preco'>Preço</label>
                        <input type='text' className='form-control' id='preco' placeholder='preco' ref={ (ref) => this.preco = ref } />
                    </div>

                    <div className="form-group">
                        <label htmlFor='preco'>Telefone</label>
                        <input type='text' className='form-control' id='telefone' placeholder='telefone' ref={ (ref) => this.telefone = ref } />
                    </div>

                    <div className="form-group">
                        <label htmlFor='vendedor'>Vendedor</label>
                        <input type='text' className='form-control' id='vendedor' placeholder='vendedor' ref={ (ref) => this.vendedor = ref } />
                    </div>
                    <button type='submit' className='btn btn-primary'>Salvar anúncio</button>
                </form>
            
            </div>
        )
    }
}

export default NewAd
