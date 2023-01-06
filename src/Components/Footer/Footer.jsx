import React from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { FooterStyled } from "./styled";

function Footer() {
  return (
    <FooterStyled>
      <h3>Desenvolvido por: Bárbara Amaral - 2023</h3>
      <p className="redes-sociais">
        <a
          href="https://github.com/BarbaraAmaral27"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={github} alt="icone github" />
        </a>
        <a href="https://www.linkedin.com/in/barbaramamaral/" target={"_blank"}>
          <img src={linkedin} alt="icone linkedin" rel="noopener noreferrer" />
        </a>
      </p>
    </FooterStyled>
  );
}

export default Footer;
