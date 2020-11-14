import React, { useState } from "react";
import StyledNav from "../styledComponents/StyledNavbar";
import basket from "../assets/images/basket.svg";
import StyledLink from "../styledComponents/StyledLink";
import { useSelector } from "react-redux";

export default function Navigation() {
  const itemsNr = useSelector((state) => state.order.itemsNr);

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
          <span>{itemsNr}</span>
          <img src={basket} alt="basket icon" />
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
