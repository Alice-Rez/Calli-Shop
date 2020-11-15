import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleBasketVisibility } from "../redux/actions";
import StyledBasketSection from "../styledComponents/StyledBasketSection";
import StyledButton from "../styledComponents/StyledButton";
import StyledFlex from "../styledComponents/StyledFlex";
import OrderList from "./OrderList";

export default function Basket() {
  let history = useHistory();
  let dispatch = useDispatch();

  const goToShop = () => {
    history.push("/");
    dispatch(toggleBasketVisibility());
  };
  return (
    <StyledBasketSection>
      <OrderList />
      <StyledFlex basket>
        <StyledButton primary onClick={goToShop}>
          &#8678; back to shop
        </StyledButton>
        <StyledButton primary>Finish order &#8680;</StyledButton>
      </StyledFlex>
    </StyledBasketSection>
  );
}
