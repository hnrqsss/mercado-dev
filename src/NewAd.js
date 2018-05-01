import React, {Component} from 'react'

import HeaderAd from './HeaderAd'


class NewAd extends Component{
    

    render(){
        return(

            <div className="container" style={{paddingTop:'120px'}} >
                <HeaderAd />
                <h1>Novo Anúncio</h1>

                <form onSubmit={null} >
                
                    <div className="form-group">
                        <label htmlFor='nome'>Nome</label>
                        <input type='text' className='form-control' id='nome' placeholder='nome' />
                    </div>

                    <div className="form-group">
                        <label htmlFor='descricao'>Descrição</label>
                        <input type='text' className='form-control' id='descricao' placeholder='descricao' />
                    </div>

                    <div className="form-group">
                        <label htmlFor='preco'>Preço</label>
                        <input type='text' className='form-control' id='preco' placeholder='preco' />
                    </div>

                    <div className="form-group">
                        <label htmlFor='preco'>Telefone</label>
                        <input type='text' className='form-control' id='telefone' placeholder='telefone' />
                    </div>

                    <div className="form-group">
                        <label htmlFor='vendedor'>Vendedor</label>
                        <input type='text' className='form-control' id='vendedor' placeholder='vendedor' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Salvar anúncio</button>
                </form>
            
            </div>
        )
    }
}

export default NewAd
