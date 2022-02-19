import React from "react";
import styled from "styled-components";

const FilterConteiner = styled.div `
    border: 1px solid;
    padding: 8px;
    width: 300px;
`

const InputConteiner = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
`


class Filtro extends React.Component {

    // state = {
    //     valorMinimo: "",
    //     valorMaximo: "",
    //     nome: "" 
    // }



    // filtraValorMinimo = (event) => {
    //     this.setState({
    //         valorMinimo: event.target.value
    //     })
    // }

    // filtraValorMaximo = (event) => {
    //     this.setState ({
    //         valorMaximo: event.target.value
    //     })
    // }

    // filtraPorNome = (event) => {
    //     this.setState ({
    //         nome: event.target.value
    //     })  
    // }


    render () {
        return (
            <FilterConteiner>
                <h3>Filtro</h3>
                <InputConteiner>
                    <p>Valor mínimo:</p>
                    <input 
                        type="number" 
                        value={this.props.valorMinimo} 
                        onChange={this.props.filtraValorMinimo} 
                        placeholder={"Digite o valor mínimo"} 
                    />
                </InputConteiner>

                <InputConteiner>
                    <p>Valor máximo:</p>
                    <input 
                        type="number" 
                        value={this.props.valorMaximo} 
                        onChange={this.props.filtraValorMaximo} 
                        placeholder={"Digite o valor máximo"} 
                    />
                </InputConteiner>

                <InputConteiner>
                    <p>Busca por nome:</p>
                    <input 
                        value={this.props.nome}
                        onChange={this.state.filtraPorNome}
                        placeholder={"Digite o nome do produto"}
                    />
                </InputConteiner>
            </FilterConteiner>
        );
    }

}

export default Filtro ;