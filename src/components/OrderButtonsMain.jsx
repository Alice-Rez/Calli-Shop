import React from "react";
import StyledButton from "../styledComponents/StyledButton";
import StyledFlex from "../styledComponents/StyledFlex";

export default function OrderButtonsMain(props) {
  const { actionLeft, textLeft, actionRight, textRight } = props;

  return (
    <StyledFlex basket>
      <StyledButton primary basketMain onClick={actionLeft}>
        &#8678; {textLeft}
      </StyledButton>
      <StyledButton primary basketMain type="submit" onClick={actionRight}>
        {textRight} &#8680;
      </StyledButton>
    </StyledFlex>
  );
}
