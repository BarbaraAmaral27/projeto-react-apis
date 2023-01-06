import React from "react";
import pikachu from "../../assets/pikachu.png";
import { NotFoundStyled } from "../NotFoundPage/styled";
import Header from "../../Components/HeaderList/Header"
const NotFoundPage = () => {
  return (
    <div>
      <Header/>
      <NotFoundStyled>
        <figure id="container">
          <img className="imagem" src={pikachu} alt="Pikachu" />
          <figcaption>Página não encontrada.</figcaption>
        </figure>
      </NotFoundStyled>
    </div>
  );
};

export default NotFoundPage;