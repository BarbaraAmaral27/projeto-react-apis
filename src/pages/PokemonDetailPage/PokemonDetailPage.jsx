import React from "react";
import Header from "../../Components/HeaderDetail/Header";
import {PokemonDetailPageStyled} from "./styled";

const PokemonDetailPage = () => {
  return (
    <>
      <PokemonDetailPageStyled>
        <Header />
        <section className="container-pokemons">
          <h1 className="title">Detalhes</h1>
        </section>
      </PokemonDetailPageStyled>
    </>
  );
};

export default PokemonDetailPage;
