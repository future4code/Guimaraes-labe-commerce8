import React from 'react';
import styled from 'styled-components';
import App from '../../App';

const CardCompra = styled.div`
    background-color: #dee2eb;
    height: 40px;
    width: 40vh;
    grid-column: 1/3;
    /* grid-row: 2/3; */
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 10px;
`
const BotaoRemover = styled.button`
    background-color:#7588b5;
    width: 70px;
    height: 25px;
    display: flex;
    justify-content: end;
    margin-right: 10px;
    color: #dee2eb;
    border-radius: 20px;

`
const FotoProduto= styled.img`
    width: 30px;
    height: 30px;
    align-self: flex-start;
    margin-right: auto;
`
const Descricao= styled.b`
    font-size: 12px;
    margin-right: 15px;
    
`

class ItemCarrinho extends React.Component{

    constructor({produto, removerProduto}) {
        super({produto, removerProduto})
    }
    
    render(){
            return(
                <CardCompra key={this.props.produto.id} >
                    <FotoProduto src={this.props.produto.foto}></FotoProduto>
                    <Descricao>{this.props.produto.descricao}</Descricao>
                    <h4>R$ {this.props.produto.preco}</h4>
                    <BotaoRemover onClick={() =>this.props.removerProduto(this.props.produto.id)}>Remover</BotaoRemover>
                </CardCompra>
            );
        
        
    }
    
}
export default ItemCarrinho;