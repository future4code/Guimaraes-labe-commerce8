import React from "react";
import Carrinho from "./componentes/Carrinho/Carrinho";
import Produtos from "./componentes/Produtos/Produtos";
import Filtro from "./componentes/Filtro/Filtro";
import Header from "./componentes/Header/Header";
class App extends React.Component {
  state = {
    valorMinimo: "",
    valorMaximo: "",
    nome: "",
    classificacaoDosProdutos: "title",

    produtos: [
      {
        id: 1,
        foto: "img/camiseta-1.jpg",
        descricao: "Camiseta Planetas-Balão",
        preco: 200.0
      },
      {
        id: 2,
        foto: "img/camiseta-2.jpg",
        descricao: "Camiseta Deus-Astronauta",
        preco: 250.0
      },
      {
        id: 3,
        foto: "img/camiseta-3.jpg",
        descricao: "Camiseta Dança Planetária",
        preco: 150.0
      },
      {
        id: 4,
        foto: "img/camiseta-4.jpg",
        descricao: "Camiseta Cosmos",
        preco: 100.0
      },
      {
        id: 5,
        foto: "img/camiseta-5.jpg",
        descricao: "Camiseta Ordem no Céu",
        preco: 150.0
      },
      {
        id: 6,
        foto: "img/camiseta-6.jpg",
        descricao: "Camiseta Tay Day Espacial",
        preco: 50.0
      }
    ],
    produtosCarrinho: [
      {
        id: 0,
        foto: "",
        descricao: "",
        preco: 0,
        quantidadeProduto: 1
      }
    ]
  };

  removerProduto = (idDoProdututoRemover) => {
    const copiaDoArrayProdutos = [...this.state.produtosCarrinho];
    const retornaIdProdutos = copiaDoArrayProdutos.filter((produto) => {
      return produto.id !== idDoProdututoRemover;
    });

    this.setState({ produtosCarrinho: retornaIdProdutos });
  };

  adicionarProdutoNoCarrinho = (id) => {
    // 1. Achar no array de produtos a vender o produto com array especificado
    // 2. Verificar se o produto já existe no carrinho
    // 2. a. Se não existir no carrinho adicionar o campo quantidade com valor igual 1 no produto
    // 2. a.1 adicionar o novo produto no final do array de carrinho
    // 2. b. se o produto existir no carrinho adicionar de 1 (+1) no campo quantidade do produto no carrinho
    const copiaDoArray = [...this.state.produtos];
    let produtosAdicionados = copiaDoArray.filter((produto) => {
      return produto.id === id;
    });
    /**
     * se o id for 1
     * [{
     *   id:1
     *   foto: "img/camiseta-1.jpg",
         descricao: "Camiseta Planetas-Balão",
         preco: 200.0
     * }]
     se id for 7
      []
     */
    produtosAdicionados = produtosAdicionados[0];
    const arrayProdutosCarrinho = [...this.state.produtosCarrinho];
    const produtosCarrinhoFiltrado = arrayProdutosCarrinho.filter((produto) => {
      return produto.id === id;
    });
    if (produtosCarrinhoFiltrado.length === 0) {
      produtosAdicionados.quantidadeProduto = 1;
      this.setState({
        produtosCarrinho: [...arrayProdutosCarrinho, produtosAdicionados]
      });
    } else {
      const produtoCarrinho = produtosCarrinhoFiltrado[0];
    }

    // let quantidadeProdutoValor =
    // if (copiaProdutosCarrinho[i] === produtosAdicionados[i]) {
    //   quantidadeProdutoValor = this.state.quantidadeProduto.valor + 1;
    // } else {
    //   return 1;
    // }
    // this.setState({quantidadeProduto:quantidadeProdutoValor})
  };

  filtraPorNome = (event) => {
    this.setState({
      nome: event.target.value
    });
  };

  filtraValorMaximo = (event) => {
    this.setState({
      valorMaximo: event.target.value
    });
  };

  filtrarValorMinimo = (event) => {
    this.setState({
      valorMinimo: event.target.value
    });
  };
  classificarProdutos = (event) => {
    this.setState({
      classificacaoDosProdutos: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Carrinho
          produtosCarrinho={this.state.produtosCarrinho}
          removerProduto={this.removerProduto}
        />
        <Produtos
          produtos={this.state.produtos}
          adicionarProdutoNoCarrinho={this.adicionarProdutoNoCarrinho}
          filtraPorNome={this.filtraPorNome}
          filtraValorMaximo={this.filtraValorMaximo}
          filtrarValorMinimo={this.filtrarValorMinimo}
          nome={this.state.nome}
          valorMaximo={this.state.valorMaximo}
          valorMinimo={this.state.valorMinimo}
          classificarProdutos={this.classificarProdutos}
          classificacaoDosProdutos={this.state.classificacaoDosProdutos}
        ></Produtos>
        <Filtro
          filtraPorNome={this.filtraPorNome}
          filtraValorMaximo={this.filtraValorMaximo}
          filtrarValorMinimo={this.filtrarValorMinimo}
          classificacaoDosProdutos={this.state.classificacaoDosProdutos}
          classificarProdutos={this.classificarProdutos}
        />
      </div>
    );
  }
}

export default App;
