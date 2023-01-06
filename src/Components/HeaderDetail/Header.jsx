import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HeaderStyled } from "./styled";
import { goToPokedexPage } from "../../routes/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = ({ pokemonObject }) => {
  const { page, setPage, pokelist, removeFromPokelist, addToPokelist } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  //verifica se o pokemon foi capturado ou não
  const filterPokelist = pokelist.filter((pokemon) => {
    return pokemon.name === pokemonObject?.name;
  });

  return (
    <>
    
      <HeaderStyled>
        <p
          className="voltar-pokemons"
          onClick={() => {
            setPage("PokedexPage");
            goToPokedexPage(navigate);
          }}
        >
          {"< Todos Pokémons"}
        </p>
        <img className="logo-pokemon" src={logo} alt="logo" />

        <div className="pai-botao">
          {filterPokelist.length > 0 && (
            <button
              className="botao-excluir"
              onClick={() => {
                removeFromPokelist(pokemonObject);
              }}
            >
              Excluir da Pokedex
            </button>
          )}
          {filterPokelist.length === 0 && (
            <button
              className="botao-add"
              onClick={() => {
                addToPokelist(pokemonObject);
              }}
            >
              Adicionar a Pokedex
            </button>
          )}
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;
