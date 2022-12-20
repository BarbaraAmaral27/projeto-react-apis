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
  background: #80eae3;
  gap: 220px;  

  .logo-pokemon {
    display: flex;
    width: 300px;
    height: 160px;
    padding: 2px 0;
  }

  .botao-pokedex {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 250px;
height: 74px;
left: 1112px;
top: 41px;
margin-right: 30px;
color: #FFFF;
size: 24px;
border: none;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;


background: #f53333;
border-radius: 8px;
  }
`;
