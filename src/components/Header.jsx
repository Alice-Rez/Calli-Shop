import React from "react";
import StyledH1 from "../styledComponents/StyledH1";
import StyledHeader from "../styledComponents/StyledHeader";
import shoDo from "../assets/images/sho-do.svg";
import StyledH2 from "../styledComponents/StyledH2";
import StyledFigure from "../styledComponents/StyledFigure";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Calli-SHOP</StyledH1>

      <StyledFigure>
        <img className="hero" src={shoDo} alt="" />
      </StyledFigure>

      <StyledH2>"The journey of writing"</StyledH2>
    </StyledHeader>
  );
}
