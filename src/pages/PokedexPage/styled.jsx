import styled from "styled-components";

export const PokedexPageStyled = styled.main `
   background-color: #5d5d5d;
   display: flex;
   flex-direction: column; 
   min-height: 100vh; 
   
   .container-pokemons {
   margin: 30px;
   margin-bottom: 100px;
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

  .scroll-top-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
`;

