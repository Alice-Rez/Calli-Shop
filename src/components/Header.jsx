import React from "react";
// import StyledH1 from "../styledComponents/StyledH1";
import StyledHeader from "../styledComponents/StyledHeader";
import shoDo from "../assets/images/sho-do.svg";
// import StyledH2 from "../styledComponents/StyledH2";
import StyledFigure from "../styledComponents/StyledFigure";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Calli-SHOP</h1>

      <StyledFigure header>
        <img src={shoDo} alt="Japanese character for writing" />
      </StyledFigure>

      <h2>"The journey of writing"</h2>
    </StyledHeader>
  );
}
