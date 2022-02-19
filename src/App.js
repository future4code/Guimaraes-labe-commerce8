import React from 'react';
import styled from 'styled-components';
import Carrinho from './componentes/Carrinho/Carrinho';
import Filtro from './componentes/Filtro/Filtro';

const produtos= [
  {
    id: 1,
    foto: "img/camiseta-1.jpg",
    descricao:"Camiseta Planetas-Balão",
    preco: 200.00,
  },
  {
    id: 2,
    foto: "img/camiseta-2.jpg",
    descricao:"Camiseta Deus-Astronauta",
    preco: 250.00,
  },
  {
    id: 3,
    foto: "img/camiseta-3.jpg",
    descricao:"Camiseta Dança Planetária",
    preco: 150.00,
  },
  {
    id: 4,
    foto: "img/camiseta-4.jpg",
    descricao:"Camiseta Cosmos",
    preco: 100.00,
  },
  {
    id: 5,
    foto: "img/camiseta-5.jpg",
    descricao:"Camiseta Ordem no Céu",
    preco: 150.00,
  },
  {
    id: 6,
    foto: "img/camiseta-6.jpg",
    descricao:"Camiseta Tay Day Espacial",
    preco: 50.00,
  }
]  

import Produtos from './componentes/Produtos/Produtos';
import CardProdutos from './componentes/Produtos/CardProdutos';

class App extends React.Component {

  state = {
    valorMinimo: 100,
    valorMaximo: 1000,
    nome: "", 
  }

  filtraValorMinimo = (event) => {
    this.setState({
        valorMinimo: event.target.value
    })
  }

  filtraValorMaximo = (event) => {
    this.setState ({
        valorMaximo: event.target.value
    })
  }

  filtraPorNome = (event) => {
    this.setState ({
        nome: event.target.value
    })  
  }

  render(){
    return (
      <div className="App">
        <Carrinho>
        </Carrinho>

        <Filtro>
          valorMinimo= {this.state.valorMinimo}
          filtraValorMinimo= {this.state.filtraValorMinimo}
          valorMaximo= {this.state.valorMaximo}
          filtraValorMaximo= {this.state.filtraValorMaximo}
          nome= {this.state.nome}
          filtraPorNome= {this.state.filtraPorNome}
        </Filtro>
      </div>
    );
  }


   render(){
     
  return (
    <div className="App">
      <Carrinho>
      </Carrinho>
      <Produtos>
          
      </Produtos>

    </div>
  );
}
}

export default App;
