import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import nomePokemon from "../../assets/nomePokemon.svg"
import { HeaderStyled } from "./styled";
import { goToPokemonListPage } from "../../routes/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = () => {

  const {page, setPage} = useContext(GlobalContext)

  const navigate = useNavigate();

  return (
    <>
      <HeaderStyled>
        <img src={nomePokemon} alt="logo" />
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
