import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage } from "../../routes/coordinator";
import logo from "../../assets/logo.svg";
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
        <a onClick={() => {setPage("PokedexPage"); goToPokedexPage(navigate)}}
        img className="logo-pokemon" src={logo} alt="logo" />
      </HeaderStyled>
    </>
  );
};

export default Header;
