import React from "react";
import styled from "styled-components";

const FilterConteiner = styled.div`
  border: 1px solid;
  padding: 8px;
  width: 300px;
`;

const InputConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

class Filtro extends React.Component {
  render() {
    return (
      <FilterConteiner>
        <span>
          <label forHtml="sort">Ordenação: </label>
          <select
            name="sort"
            value={this.props.classificacaoDosProdutos}
            onChange={this.props.classificarProdutos}
          >
            <option value="title">Título</option>
            <option value="price">Preço</option>
          </select>
        </span>
        <h3>Filtro</h3>

        <InputConteiner>
          <p>Valor mínimo:</p>
          <input
            type="number"
            value={this.props.valorMinimo}
            onChange={this.props.filtrarValorMinimo}
          />
        </InputConteiner>

        <InputConteiner>
          <p>Valor máximo:</p>
          <input
            type="number"
            value={this.props.valorMaximo}
            onChange={this.props.filtraValorMaximo}
          />
        </InputConteiner>

        <InputConteiner>
          <p>Busca por nome:</p>
          <input value={this.props.nome} onChange={this.props.filtraPorNome} />
          {this.props.nome}
        </InputConteiner>
      </FilterConteiner>
    );
  }
}

export default Filtro;
