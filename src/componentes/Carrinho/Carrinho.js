import React from "react";
import styled from "styled-components";
import ItemCarrinho from "../Carrinho/ItemCarrinho/";
const CarrinhoContainer = styled.div`
  background-color: #7588b5;
  width: 45vh;
  height: auto;
  margin-left: auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  padding: 10px;
`;
const ContainerTitulo = styled.div`
  background-color: #dee2eb;
  width: 170px;
  height: 30px;
  grid-column: 2/3;
  grid-row: 1/2;
  margin: auto;
`;
const Titulo = styled.h4`
  display: flex;
  align-items: center;
  grid-column: 2/3;
  grid-row: 1/2;
  margin: auto;
  justify-content: center;
`;

const ImageTitulo = styled.div`
  background-image: url("img/nave.png");
  background-size: 50px;
  height: 50px;
  width: 50px;
  grid-column: 1/2;
  grid-row: 1/2;
  margin: auto;
`;
const TotalPagar = styled.div`
  background-color: #dee2eb;
  grid-column: 1/3;
  height: 40px;
  width: 40vh;
  margin-top: 15px;
`;

class Carrinho extends React.Component {
  state = {
    total: 0
  };

  static getDerivedStateFromProps(props, state) {
    let soma = 0;
    if (props.produtosCarrinho) {
      props.produtosCarrinho.forEach((produto) => {
        soma += produto.preco;
      });
    }
    return {
      total: soma
    };
  }

  render() {
    return (
      <CarrinhoContainer>
        <ImageTitulo />
        <ContainerTitulo>
          <Titulo>Carrinho de compras</Titulo>
        </ContainerTitulo>
        {this.props.produtosCarrinho.map((produto) => (
          <ItemCarrinho
            produto={produto}
            removerProduto={this.props.removerProduto}
          />
        ))}
        <TotalPagar> Total: R${this.state.total} </TotalPagar>
      </CarrinhoContainer>
    );
  }
}

export default Carrinho;
