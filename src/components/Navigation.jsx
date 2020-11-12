import React, { useState } from "react";
import StyledNav from "../styledComponents/StyledNavbar";
import { Link } from "react-router-dom";
import basket from "../assets/images/basket.svg";

export default function Navigation() {
  const [basketVisible, setBasketVisible] = useState(false);
  return (
    <StyledNav>
      {!basketVisible ? (
        <Link
          to="/basket"
          onClick={() => {
            setBasketVisible(true);
          }}
        >
          <span>0</span>
          <img class="basket" src={basket} alt="" />
        </Link>
      ) : (
        <Link
          to="/"
          onClick={() => {
            setBasketVisible(false);
          }}
        >
          Products
        </Link>
      )}
    </StyledNav>
  );
}
