import React from "react";
import StyledCloseButton from "../../styledComponents/StyledCloseButton";
import StyledLink from "../../styledComponents/StyledLink";
import StyledSection from "../../styledComponents/StyledSection";
import profile from "../../assets/images/profile.jpg";
import StyledFlex from "../../styledComponents/StyledFlex";
import StyledProfileImage from "../../styledComponents/StyledProfileImg";

export default function About() {
  return (
    <StyledSection basket>
      <StyledCloseButton>
        <StyledLink to="/">x</StyledLink>
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
            Visit{" "}
            <StyledLink to="https://github.com/Alice-Rez">GitHub</StyledLink>{" "}
            Account.
          </p>
        </div>
      </StyledFlex>
    </StyledSection>
  );
}
