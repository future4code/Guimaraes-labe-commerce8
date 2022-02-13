import React from 'react';
import styled from 'styled-components';

const ContainerCompra = styled.div`
    background-color: #dee2eb;
    height: 40px;
    width: 30vh;
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

class ItemCarrinho extends React.Component{
    render(){
        return(
            <ContainerCompra>
                <BotaoRemover>Remover</BotaoRemover>

            </ContainerCompra>
        )
    }
    
}
export default ItemCarrinho;