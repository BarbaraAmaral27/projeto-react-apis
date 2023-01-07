import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 0px;
  background: #ffff;
  gap: 530px;
 
  
  img {
    position: absolute;
    top: 9%;
    left: 50%;
    transform: translate(-50%, -50%);
   
  }

   .voltar-pokemons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    left: 1112px;
    top: 41px;
    margin-left: 20px;
    color: black;
    size: 24px;
    cursor: pointer;
   
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-decoration: underline;

    
    border-radius: 8px;
  }
`;
