import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HeaderStyled } from "./styled";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderStyled>
        <img className="logo-pokemon" src={logo} alt="logo" />
        <div className="pai-botao">
          <button className="botao-pokedex" onClick={()=> goToPokemonListPage(navigate)}>Pokédex</button>
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;
