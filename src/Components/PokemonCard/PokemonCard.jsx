import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styled";
import pokeball from "../../assets/pokeball.svg";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnCardColor";
import axios from "axios";
import {goToPokemonDetailPage} from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {GlobalContext} from "../../contexts/GlobalContext";

const PokemonCard = ({ pokemonUrl, pokemon }) => {
  const {
    addToPokelist,
    removeFromPokelist,
    page,
    setPage
  } = useContext(GlobalContext)

  const [detailPokemon, setDetailPokemon] = useState({});
  const navigate = useNavigate()

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setDetailPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokemonUrl]);

  const configNumber = (index) => {
    return index < 10 ? `0${index}` : `${index}`;
  }

  return (
    <Container
      color={getColors(detailPokemon.types && detailPokemon.types[0].type.name)}
    >
      <section>
        <p>{`#${configNumber(detailPokemon.id)}`}</p>
        <h1 className="name">{pokemon.name}</h1>
        <div className="container-tipo">
          {detailPokemon.types?.map((type, index) => {
            return (
              <img
                key={index}
                src={getTypes(type.type.name)}
                alt="tipos de pokémon"
              />
            );
          })}
        </div>
      </section>
      <img
        className="img-pokemon"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detailPokemon.id}.png`}
        alt={pokemon.name}
      />
      <section className="botoes">
        <p
          onClick={() => goToPokemonDetailPage(navigate, pokemon.name)}
          className="detalhes"
        >
          Detalhes
        </p>

        {page === "PokedexPage" && (
          <button onClick={() => addToPokelist(pokemon)}>Capturar!</button>
        )}
        {page === "PokemonListPage" && (
          <button className="botao-excluir" onClick={() => removeFromPokelist(pokemon)}>Excluir</button>
        )}
      </section>
      <img className="pokeball" src={pokeball} alt="pokeball" />
    </Container>
  );
};

export default PokemonCard;

