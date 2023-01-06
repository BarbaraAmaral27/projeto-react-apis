import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HeaderStyled } from "./styled";
import { goToPokemonListPage } from "../../routes/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = () => {

  const {page, setPage} = useContext(GlobalContext)

  const navigate = useNavigate();

  return (
    <>
      <HeaderStyled>
        <img className="logo-pokemon" src={logo} alt="logo" />
        <button
          className="botao-pokedex"
          onClick={() => 
            {setPage("PokemonListPage");
            goToPokemonListPage(navigate);
          }}
        >
          Pokédex
        </button>
      </HeaderStyled>
    </>
  );
};

export default Header;
