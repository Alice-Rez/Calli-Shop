import React from "react";
import StyledH1 from "../styledComponents/StyledH1";
import StyledHeader from "../styledComponents/StyledHeader";
import shoDo from "../assets/images/sho-do.svg";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Calli-SHOP</StyledH1>
      <figure>
        <img src={shoDo} alt="" />
      </figure>
    </StyledHeader>
  );
}
