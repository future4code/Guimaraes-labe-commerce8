import React from "react";
import styled from "styled-components";

const ContainerPai = styled.div`
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;
const CardProduto = styled.div`
  background-color: #7588b5;
  height: auto;
  width: 200px;
  margin: 15px;
`;
const FotoProduto = styled.img`
  width: 100px;
  height: auto;
  padding: 30px;
  align-self: center;
`;
const Descricao = styled.h4`
  font-size: 12px;
  margin: auto;
`;
const BotaoAdicionar = styled.button``;
class Produtos extends React.Component {
  constructor({
    produto,
    adicionarProdutoNoCarrinho,
    filtraPorNome,
    filtraValorMaximo,
    filtrarValorMinimo,
    nome,
    valorMaximo,
    valorMinimo,
    classificarProdutos,
    classificacaoDosProdutos
  }) {
    super({
      produto,
      adicionarProdutoNoCarrinho,
      filtraPorNome,
      filtraValorMaximo,
      filtrarValorMinimo,
      nome,
      valorMaximo,
      valorMinimo,
      classificarProdutos,
      classificacaoDosProdutos
    });
  }

  render() {
    return (
      <ContainerPai>
        {this.props.produtos
          .filter((produto) => {
            return produto.descricao
              .toLowerCase()
              .includes(this.props.nome.toLowerCase());
          })
          .filter((produto) => {
            return (
              this.props.valorMinimo === "" ||
              produto.preco >= this.props.valorMinimo
            );
          })
          .filter((produto) => {
            return (
              this.props.valorMaximo === "" ||
              produto.preco <= this.props.valorMaximo
            );
          })
          .sort((a, b) => {
            console.log(this.props.classificarProdutos);
            switch (this.props.classificacaoDosProdutos) {
              case "title":
                return a.descricao.localeCompare(b.descricao);
              default:
                return a.preco - b.preco;
            }
          })
          .map((produto) => (
            <CardProduto key={produto.id}>
              <FotoProduto src={produto.foto}></FotoProduto>
              <Descricao>{produto.descricao}</Descricao>
              <h4> R${produto.preco}</h4>
              <BotaoAdicionar
                onClick={() =>
                  this.props.adicionarProdutoNoCarrinho(produto.id)
                }
              >
                Adicionar
              </BotaoAdicionar>
            </CardProduto>
          ))}
      </ContainerPai>
    );
  }
}
export default Produtos;

 

