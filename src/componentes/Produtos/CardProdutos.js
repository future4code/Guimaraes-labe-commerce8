import React from 'react'
import styled from 'styled-components'


const CardContainer = styled.div`
    border: 1px solid;
    display:flex;
    flex-direction:column;
`

const Informacoes = styled.div`
    display:flex;
    flex-direction:column;
    padding:16px;

    p{
        margin:4px 0;
    }
`
const BotaoAdicionar = styled.button`
    margin-top: 4px;
`


class CardProdutos extends React.Component{
    render() {
        const produto = this.props.produto

        return (
            <CardContainer>
                <img src={produto.foto} />
                <Informacoes>
                  <p>{produto.nome}</p>
                  <p>R${produto.preco},00</p>
                  <BotaoAdicionar>adicionar ao carrinho</BotaoAdicionar>
                </Informacoes>
            </CardContainer>
        )
    }
} 

export default CardProdutos;