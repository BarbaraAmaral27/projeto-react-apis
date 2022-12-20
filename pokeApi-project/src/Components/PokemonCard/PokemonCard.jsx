import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import pokeball from "../../assets/pokeball.svg";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnCardColor";
import axios from "axios";

const PokemonCard = ({ pokemonUrl, pokemon }) => {
  const [detailPokemon, setDetailPokemon] = useState({});

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

 
  return (
    <Container color={getColors(detailPokemon.types && detailPokemon.types[0].type.name)} >
      <section>
        <p>{detailPokemon.id}</p>
        <h1 className="name">{pokemon.name}</h1>
        <div className="container-tipo">
          {detailPokemon.types?.map((type, index) => {
            return <img key={index} src={getTypes(type.type.name)} alt="" />;
          })}
        </div>
        <p>Detalhes</p>
      </section>
      <section>
        <img className="img-pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detailPokemon.id}.png`}
          alt={pokemon.name}
        />
        <button>Capturar!</button>
      </section>
      <img className="pokeball" src={pokeball} alt="pokeball" />
    </Container>
  );
};

export default PokemonCard;
