import styled from "styled-components";

export const PokemonDetailPageStyled = styled.main `
   background-color: #5d5d5d;
   display: flex;
   flex-direction: column;  
   height: 100vh;
   
   .container-pokemons {
   margin: 30px;
  }
  .tittle {
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

