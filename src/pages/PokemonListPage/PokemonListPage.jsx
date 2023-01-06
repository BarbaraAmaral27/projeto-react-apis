import React, { useContext } from "react";
import Header from "../../Components/HeaderList/Header";
import { PokemonListPageStyled } from "../PokemonListPage/styled";
import { GlobalContext } from "../../contexts/GlobalContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Modal from "../../Components/Modal/Modal";
import Footer from "../../Components/Footer/Footer"

const PokemonListPage = () => {
  const { removeFromPokedex, pokelist, isModalOpen } =
    useContext(GlobalContext);

  return (
    <>
      {isModalOpen && <Modal />}
      <PokemonListPageStyled>
        <Header />
        <section className="container-pokemons">
          <h1 className="title">Meus Pokemons</h1>
          <section className="container-pokemon">
            {pokelist.map((pokemon) => {
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
      </PokemonListPageStyled>
      <Footer/>
    </>
  );
};

export default PokemonListPage;
