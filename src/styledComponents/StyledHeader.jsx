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
`;

export default StyledHeader;
