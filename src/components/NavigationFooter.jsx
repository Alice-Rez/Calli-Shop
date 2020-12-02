import React from "react";
import StyledLink from "../styledComponents/StyledLink";

export default function NavigationFooter() {
  return (
    <nav>
      <StyledLink footer to="">
        Shipping & Payment
      </StyledLink>
      <StyledLink footer to="">
        Terms & Conditions
      </StyledLink>
      <StyledLink footer to="">
        Privacy Policy
      </StyledLink>
      <StyledLink footer to="">
        About us
      </StyledLink>
    </nav>
  );
}
