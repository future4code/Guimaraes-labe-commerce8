import React from "react";
import styled from "styled-components";

const OrdemDosProdutos = styled.span`
  background-color: #dee2eb;
  width: 170px;
  height: 30px;
  margin: auto;
`;
class Header extends React.Component {
  render() {
    return (
      <div>
        <OrdemDosProdutos />
      </div>
    );
  }
}

export default Header;