import React from "react";
import { useSelector } from "react-redux";
import StyledCloseButton from "../../styledComponents/StyledCloseButton";
import StyledLink from "../../styledComponents/StyledLink";
import StyledSection from "../../styledComponents/StyledSection";

export default function Privacy() {
  const isInBasket = useSelector((state) => state.isInBasket);

  return (
    <StyledSection basket>
      <StyledCloseButton>
        <StyledLink to={isInBasket ? "/basket" : "/"}>x</StyledLink>
      </StyledCloseButton>
      <h4>Privacy Policy</h4>
      <p>We are respecting all rights for privacy accordingly to GDPR.</p>
    </StyledSection>
  );
}
