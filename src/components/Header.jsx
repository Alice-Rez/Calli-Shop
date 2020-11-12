import React from "react";
import StyledH1 from "../styledComponents/StyledH1";
import StyledHeader from "../styledComponents/StyledHeader";
import shoDo from "../assets/images/sho-do.svg";
import StyledH2 from "../styledComponents/StyledH2";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Calli-SHOP</StyledH1>
      <figure>
        <img src={shoDo} alt="" />
      </figure>
      <StyledH2>"The way of writing"</StyledH2>
    </StyledHeader>
  );
}
