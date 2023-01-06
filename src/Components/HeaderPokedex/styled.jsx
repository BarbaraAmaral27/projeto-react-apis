import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 0px;
  background: #ffff;
  gap: 480px; 
  
  .logo-pokemon {
    display: flex;
    width: 300px;
    height: 160px;   
  }

  .botao-pokedex {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 287px;
    height: 74px;
    left: 1112px;
    top: 41px;
    margin-right: 40px;
    color: #ffff;
    size: 24px;
    border: none;

    font-family: "Poppins";
    font-style: normal;
    /* font-weight: 700; */
    font-size: 24px;
    line-height: 36px;

    background: #33a4f5;
    border-radius: 8px;
    cursor: pointer;
  }
`;
