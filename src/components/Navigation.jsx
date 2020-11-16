import React from "react";
import StyledNav from "../styledComponents/StyledNavbar";
import basket from "../assets/images/basket.svg";
import StyledLink from "../styledComponents/StyledLink";
import { useDispatch, useSelector } from "react-redux";
import { toggleBasketVisibility } from "../redux/actions";

export default function Navigation() {
  const itemsNr = useSelector((state) => state.order.itemsNr);
  const isInBasket = useSelector((state) => state.isInBasket);
  const dispatch = useDispatch();

  return (
    <StyledNav>
      {isInBasket ? (
        <StyledLink
          to="/"
          onClick={() => {
            dispatch(toggleBasketVisibility());
          }}
        >
          Back to shop
        </StyledLink>
      ) : (
        <StyledLink
          to="/basket"
          onClick={() => {
            dispatch(toggleBasketVisibility());
          }}
        >
          <span>{itemsNr}</span>
          <img src={basket} alt="basket icon" />
        </StyledLink>
      )}
    </StyledNav>
  );
}
