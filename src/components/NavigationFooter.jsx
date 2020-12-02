import React from "react";
import StyledLink from "../styledComponents/StyledLink";

export default function NavigationFooter() {
  return (
    <nav>
      <StyledLink footer to="/shipping-payment">
        Shipping & Payment
      </StyledLink>
      <StyledLink footer to="/terms-conditions">
        Terms & Conditions
      </StyledLink>
      <StyledLink footer to="/privacy-policy">
        Privacy Policy
      </StyledLink>
      <StyledLink footer to="/about">
        About us
      </StyledLink>
    </nav>
  );
}
