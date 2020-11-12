import styled from "styled-components";
import device from "./device";

const StyledH1 = styled.h1`
  text-align: center;
  font-family: var(--display);
  font-weight: 900;
  font-size: 3rem;
  padding: var(--space-small);
  /* padding-top: 0; */
  margin-bottom: var(--space-small);
  @media ${device.bigDesktop} {
    font-size: 4rem;
  }
`;

export default StyledH1;
