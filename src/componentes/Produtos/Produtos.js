import React from "react";

import styled from "styled-components";

import styled from 'styled-components';
import CardProdutos from "./CardProdutos";

const ContainerProdutos = styled.div`


`
 
class Produtos extends React.Component {
    render(){
        return (  
            <ContainerProdutos>
                <CardProdutos
                   // produto = {produto}
                />

            </ContainerProdutos> 
         
        
        )
    }
}
export default Produtos;
 

