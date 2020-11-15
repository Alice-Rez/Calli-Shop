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
        <StyledButton primary>&#8678; back to shop</StyledButton>
        <StyledButton primary>Finish order &#8680;</StyledButton>
      </StyledFlex>
    </StyledBasketSection>
  );
}
