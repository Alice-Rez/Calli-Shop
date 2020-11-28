import React from "react";
import StyledButton from "../styledComponents/StyledButton";
import StyledSuccess from "../styledComponents/StyledSuccess";

export default function OrderSuccess(props) {
  return (
    <React.Fragment>
      <StyledSuccess>Thank you for your order!</StyledSuccess>
      <StyledButton primary onClick={props.goToShop}>
        Back to shop
      </StyledButton>
    </React.Fragment>
  );
}
