import styled from "styled-components";
import device from "./device";

const StyledH2 = styled.h2`
  display: none;
  text-transform: uppercase;
  padding: var(--space-small);
  padding-top: var(--space-medium);
  font-weight: 400;

  @media ${device.tabletLandscape} {
    display: block;
  }
`;

export default StyledH2;
