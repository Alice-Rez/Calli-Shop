import React from "react";
import StyledBasketSection from "../styledComponents/StyledBasketSection";
import StyledButton from "../styledComponents/StyledButton";
import StyledFlex from "../styledComponents/StyledFlex";
import OrderList from "./OrderList";

export default function Basket() {
  return (
    <StyledBasketSection>
      <OrderList />
      <StyledFlex spaceBetween basket>
        <StyledButton primary>⬅ back to shop</StyledButton>
        <StyledButton primary>Finish order &#11157;</StyledButton>
      </StyledFlex>
    </StyledBasketSection>
  );
}
