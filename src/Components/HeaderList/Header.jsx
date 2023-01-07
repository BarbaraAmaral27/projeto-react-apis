import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage } from "../../routes/coordinator";
import nomePokemon from "../../assets/nomePokemon.svg"
import { HeaderStyled } from "./styled";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
  const {page, setPage} = useContext(GlobalContext)
  const navigate = useNavigate();
  return (
    <>
      <HeaderStyled>
        <p
          className="voltar-pokemons"
          onClick={() => {setPage("PokedexPage"); goToPokedexPage(navigate)}}
        >
          {"< Todos Pokémons"}
        </p>        
        <img src={nomePokemon} alt="logo" />
        <p onClick={() => {setPage("PokedexPage"); goToPokedexPage(navigate)}}></p>
        
      </HeaderStyled>
    </>
  );
};

export default Header;
