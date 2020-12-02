import React from "react";
import StyledFooter from "../styledComponents/StyledFooter";
import logo from "../assets/images/logo.svg";
import NavigationFooter from "./NavigationFooter";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <StyledFooter>
      <NavigationFooter />
      <p>
        <Link to="/terms-conditions">&#169;2020</Link>{" "}
        <img className="logo" src={logo} alt="Alice Rez logo" /> Alice Rez
      </p>
    </StyledFooter>
  );
}
