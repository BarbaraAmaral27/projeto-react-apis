import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HeaderStyled } from "./styled";
import {goToPokemonListPage} from "../../routes/coordinator"

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderStyled>
        <img className="logo-pokemon" src={logo} alt="logo" />
        <button
          className="botao-pokedex"
          onClick={() => goToPokemonListPage(navigate)}
        >
          Pokelist
        </button>
      </HeaderStyled>
    </>
  );
};

export default Header;
