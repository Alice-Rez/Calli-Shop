import React from "react";
import StyledNav from "../styledComponents/StyledNavbar";
import basket from "../assets/images/basket.svg";

export default function Navigation() {
  return (
    <StyledNav>
      <span>0</span>
      <img class="basket" src={basket} alt="" />
      <span>Products</span>
    </StyledNav>
  );
}
