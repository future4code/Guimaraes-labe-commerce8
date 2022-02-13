import React from 'react';
import styled from 'styled-components';
import ItemCarrinho from '../ItemCarrinho/ItemCarrinho';



const CarrinhoContainer = styled.div`
    background-color: #7588b5;
    width: 30vh;
    height: auto;
    margin-left: auto;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr; 
    padding: 10px;
    
`
const ContainerTitulo =styled.div`
    background-color: #dee2eb;
    width: 170px;
    height: 30px;
    grid-column: 2/3;
    grid-row: 1/2;
    margin: auto;
    
`
const Titulo = styled.h4`
    display: flex;
    align-items: center;
    grid-column: 2/3;
    grid-row: 1/2;
    margin: auto;
    justify-content: center;
`

const ImageTitulo = styled.div`
    background-image: url('img/nave.png');
    background-size: 50px;
    height: 50px;
    width: 50px;
    grid-column: 1/2;
    grid-row: 1/2;
    margin: auto;
`
const TotalPagar = styled.div`
    background-color: #dee2eb;
    grid-column: 1/3;
    height: 40px;
    width: 30vh;
    margin-top: 15px;
    
`

class Carrinho extends React.Component{
    render(){
        return (
            <CarrinhoContainer>
                <ImageTitulo/>
                <ContainerTitulo>
                    <Titulo>Carrinho de compras</Titulo>
                </ContainerTitulo>
                <ItemCarrinho/>
                <TotalPagar> Total: R$ </TotalPagar>
            </CarrinhoContainer>
        );

        
    }
}


export default Carrinho; 