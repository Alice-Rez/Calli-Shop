import React from "react";
import StyledBasketSection from "../styledComponents/StyledBasketSection";
import OrderList from "./OrderList";

export default function Basket() {
  return (
    <StyledBasketSection>
      <OrderList />
    </StyledBasketSection>
  );
}
