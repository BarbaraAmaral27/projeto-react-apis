import React, { useEffect, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/HeaderPokedex/Header";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { PokedexPageStyled } from "../PokedexPage/styled"

const PokedexPage = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(`${BASE_URL}pokemon?limit=151&offset=0`);
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);


  return (
    <>
      <Header />
      <PokedexPageStyled>
      <section className="container-pokemons">
      <h1 className="title">Todos os Pokemons</h1>        
        <section className="container-pokemon">
          {pokemons.map((pokemon) => {
            return (
              <PokemonCard
                pokemonUrl={pokemon.url}
                pokemon={pokemon}
                key={pokemon.id}
              />
            );
          })}
        </section>
      </section>
      </PokedexPageStyled>
    </>
  );
};

export default PokedexPage;
