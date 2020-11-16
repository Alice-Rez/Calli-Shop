import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleBasketVisibility } from "../redux/actions";
import StyledSection from "../styledComponents/StyledSection";
import StyledButton from "../styledComponents/StyledButton";
import StyledFlex from "../styledComponents/StyledFlex";
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";

export default function Basket() {
  let history = useHistory();
  let dispatch = useDispatch();

  const [page, setPage] = useState("basket");

  let textLeft, actionLeft, textRight, actionRight;

  const getButtonsSpec = () => {
    switch (page) {
      default:
        textLeft = "back to Shop";
        actionLeft = goToShop;
        textRight = "go to order";
        actionRight = () => {
          console.log("order");
        };
    }
  };

  const goToShop = () => {
    history.push("/");
    dispatch(toggleBasketVisibility());
  };

  getButtonsSpec();
  return (
    <StyledSection basket>
      {page === "basket" ? (
        <React.Fragment>
          <OrderList />
          <OrderDetails />
        </React.Fragment>
      ) : null}
      <StyledFlex basket>
        <StyledButton primary onClick={actionLeft}>
          &#8678; {textLeft}
        </StyledButton>
        <StyledButton primary onClick={actionRight}>
          {textRight} &#8680;
        </StyledButton>
      </StyledFlex>
    </StyledSection>
  );
}
