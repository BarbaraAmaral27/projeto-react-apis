import React from "react";
import Header from "../../Components/HeaderList/Header"
import { PokemonListPageStyled } from "../PokemonListPage/styled"

const PokemonListPage = () => {
  return (
    <>
      <PokemonListPageStyled>
      <Header/>
      <section className="container-pokemons">
      <h1 className="title">Todos os Pokemons</h1> 
    </section>
    </PokemonListPageStyled>
    </>
  );
};

export default PokemonListPage;
