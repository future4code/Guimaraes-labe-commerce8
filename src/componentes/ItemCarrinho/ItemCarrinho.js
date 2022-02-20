import React from "react";
import styled from "styled-components";

const CardCompra = styled.div`
  background-color: #dee2eb;
  height: 40px;
  width: auto;
  grid-column: 1/3;
  /* grid-row: 2/3; */
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 10px;
`;
const BotaoRemover = styled.button`
  background-color: #7588b5;
  width: 70px;
  height: 25px;
  display: flex;
  justify-content: end;
  margin-right: 10px;
  color: #dee2eb;
  border-radius: 20px;
`;
const FotoProduto = styled.img`
  width: 30px;
  height: 30px;
  align-self: flex-start;
  margin-right: auto;
`;
const Descricao = styled.b`
  font-size: 12px;
  margin-right: 15px;
`;
const QuantidadeProduto = styled.h4`
  font-size: 12px;
  margin: auto;
`;
class ItemCarrinho extends React.Component {
  constructor({ produto, removerProduto, quantidadeProduto }) {
    super({ produto, removerProduto, quantidadeProduto });
  }

  render() {
    return (
      <CardCompra>
        <FotoProduto src={this.props.produto.foto}></FotoProduto>
        <QuantidadeProduto>{this.props.quantidadeProduto}</QuantidadeProduto>
        <Descricao>{this.props.produto.descricao}</Descricao>
        <h4>R$ {this.props.produto.preco}</h4>
        <BotaoRemover
          onClick={() => this.props.removerProduto(this.props.produto.id)}
        >
          Remover
        </BotaoRemover>
      </CardCompra>
    );
  }
}
export default ItemCarrinho;
