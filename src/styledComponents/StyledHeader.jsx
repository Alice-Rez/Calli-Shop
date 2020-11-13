import styled from "styled-components";
import device from "./device";

const StyledHeader = styled.header`
  height: 100vh;
  grid-area: header;
  background-color: var(--black);
  text-align: center;
  color: var(--white);

  display: grid;
  grid-template-rows: auto 1fr auto;

  @media ${device.tabletLandscape} {
    position: sticky;
    top: 0;
  }

  h1 {
    text-align: center;
    font-family: var(--display);
    font-weight: 900;
    font-size: 3rem;
    padding: var(--space-small);
    margin: 0 auto;
    @media ${device.bigDesktop} {
      font-size: 4rem;
    }
  }

  h2 {
    display: none;
    text-transform: uppercase;
    padding: var(--space-small);
    padding-top: var(--space-medium);
    font-weight: 400;

    @media ${device.tabletLandscape} {
      display: block;
    }
  }
`;

export default StyledHeader;
