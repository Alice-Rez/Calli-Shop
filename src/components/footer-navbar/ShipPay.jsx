import React from "react";
import StyledCloseButton from "../../styledComponents/StyledCloseButton";
import StyledLink from "../../styledComponents/StyledLink";
import StyledSection from "../../styledComponents/StyledSection";

export default function ShipPay() {
  return (
    <StyledSection basket>
      <StyledCloseButton>
        <StyledLink to="/">x</StyledLink>
      </StyledCloseButton>
      <h4>Shipping & Payment Options</h4>
    </StyledSection>
  );
}
