import styled from "styled-components";
import device from "./device";

const StyledCardDeck = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: var(--space-large) 0 0;

  @media ${device.desktop} {
    padding: var(--space-large) var(--space-medium) 0;
  }
`;

export default StyledCardDeck;
