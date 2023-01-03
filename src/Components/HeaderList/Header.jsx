import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage } from "../../routes/coordinator";
import logo from "../../assets/logo.svg";
import { HeaderStyled } from "./styled";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderStyled>
        <p
          className="voltar-pokemons"
          onClick={() => goToPokedexPage(navigate)}
        >
          {"< Todos Pokémons"}
        </p>
        <img className="logo-pokemon" src={logo} alt="logo" />
      </HeaderStyled>
    </>
  );
};

export default Header;
