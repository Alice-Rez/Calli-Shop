import React, { useState } from "react";
import StyledNav from "../styledComponents/StyledNavbar";
import { Link } from "react-router-dom";
import basket from "../assets/images/basket.svg";
import StyledLink from "../styledComponents/StyledLink";

export default function Navigation() {
  const [basketVisible, setBasketVisible] = useState(false);
  return (
    <StyledNav>
      {!basketVisible ? (
        <StyledLink
          to="/basket"
          onClick={() => {
            setBasketVisible(true);
          }}
        >
          <span>0</span>
          <img src={basket} alt="" />
        </StyledLink>
      ) : (
        <StyledLink
          to="/"
          onClick={() => {
            setBasketVisible(false);
          }}
        >
          Products
        </StyledLink>
      )}
    </StyledNav>
  );
}
