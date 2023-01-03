import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HeaderStyled } from "./styled";
import { goToPokedexPage } from "../../routes/coordinator"

const Header = () => {
  const navigate = useNavigate()
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
        <div className="pai-botao">
          <button className="botao-pokedex">Excluir Pokemon</button>
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;
