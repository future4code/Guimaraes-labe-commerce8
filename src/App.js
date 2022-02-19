import React from 'react';
import styled from 'styled-components';
import Carrinho from './componentes/Carrinho/Carrinho';
import Produtos from './componentes/Produtos/Produtos';
import CardProdutos from './componentes/Produtos/CardProdutos';


class App extends React.Component {

  state = {
    produtos:[
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
      },
    ]
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
