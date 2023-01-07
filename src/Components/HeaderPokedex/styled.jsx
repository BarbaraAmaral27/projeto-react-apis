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
  background: #ffffff;
  gap: 530px;
 
  img {
    position: absolute;
    top: 9%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  
  .botao-pokedex {
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    width: 287px;
    height: 74px;
    left: 1112px;
    top: 41px;
    background: #33a4f5;
    color: #ffffff;
    border-radius: 8px;
    font-family: "Poppins";
    font-style: normal;
    font-size: 24px;
    border: none;
    margin-right: 60px;
    cursor: pointer;
  }
`;
