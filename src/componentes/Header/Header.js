import React from "react";
import styled from "styled-components";

const ContainerHeader = styled.div`
    background-color: blue;
    height: 25vh;
    width: auto;
`
const OrdemDosProdutos = styled.span`
  background-color: #dee2eb;
  width: 170px;
  height: 30px;
  margin: auto;
`;
class Header extends React.Component {
  render() {
    return (
      <ContainerHeader>
        <OrdemDosProdutos />
      </ContainerHeader>
    );
  }
}

export default Header;