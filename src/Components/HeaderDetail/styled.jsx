import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 0px;
  background: #ffff;

  .logo-pokemon {
    display: flex;
    width: 300px;
    height: 160px;
    padding: 2px 0;
  }

  .botao-excluir {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 300px;
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

    background: #f53333;
    border-radius: 8px;
  }

  .botao-add {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 300px;
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
  }

  .voltar-pokemons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    left: 1112px;
    top: 41px;
    margin-left: 40px;
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
