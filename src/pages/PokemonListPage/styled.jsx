import styled from "styled-components";

export const PokemonListPageStyled = styled.main `
   background-color: #5d5d5d;
   display: flex;
   flex-direction: column;  
   min-height: 100vh;
   
  .container-pokemons {
   margin: 30px;
  }
  .title {
   font-weight: 700;
   font-size: 3rem;
   color: #FFFF;
   margin-left: 35px;
}
  .container-pokemon {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;   
  }
`;

