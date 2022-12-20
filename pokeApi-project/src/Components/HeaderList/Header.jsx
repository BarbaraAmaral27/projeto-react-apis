import React from "react";
import logo from "../../assets/logo.svg";
import { HeaderStyled } from "./styled";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <img className="logo-pokemon" src={logo} alt="logo" />
      </HeaderStyled>
    </>
  );
};

export default Header;
