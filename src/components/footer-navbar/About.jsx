import React from "react";
import { useSelector } from "react-redux";
import StyledCloseButton from "../../styledComponents/StyledCloseButton";
import StyledLink from "../../styledComponents/StyledLink";
import StyledSection from "../../styledComponents/StyledSection";
import profile from "../../assets/images/profile.jpg";
import StyledFlex from "../../styledComponents/StyledFlex";
import StyledProfileImage from "../../styledComponents/StyledProfileImg";

export default function About() {
  const isInBasket = useSelector((state) => state.isInBasket);
  return (
    <StyledSection basket>
      <StyledCloseButton>
        <StyledLink to={isInBasket ? "/basket" : "/"}>x</StyledLink>
      </StyledCloseButton>
      <h4>About us</h4>
      <StyledFlex aboutUs>
        {/* <StyledProfileImage src={profile} alt="" /> */}
        <img src={profile} alt="Alice's portrait" />
        <div>
          <p>
            This shop was created by aspiring developer Alice Rez as a final
            project after React module of one year web-development course.
          </p>
          <p>
            Applications is created in React (with usage of Create React App and
            React Router DOM). For the state management was used Redux
          </p>
          <p>
            Visit <a href="https://github.com/Alice-Rez">GitHub </a> Account.
          </p>
        </div>
      </StyledFlex>
    </StyledSection>
  );
}
