import React from "react";
import logo from "../../assets/logo.svg";
import { HeaderStyled } from "./styled";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <img className="logo-pokemon" src={logo} alt="logo" />
        <div className="pai-botao">
          <button className="botao-pokedex">Excluir Pokemon</button>
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;
