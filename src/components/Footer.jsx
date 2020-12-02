import React from "react";
import StyledFooter from "../styledComponents/StyledFooter";
import logo from "../assets/images/logo.svg";
import NavigationFooter from "./NavigationFooter";

export default function Footer() {
  return (
    <StyledFooter>
      <NavigationFooter />
      <p>
        &#169;2020 All rights reserved{" "}
        <img className="logo" src={logo} alt="Alice Rez logo" /> Alice Rez
      </p>
    </StyledFooter>
  );
}
