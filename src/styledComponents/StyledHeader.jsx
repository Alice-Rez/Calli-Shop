import styled from "styled-components";

const StyledHeader = styled.header`
  min-height: 100vh;
  grid-area: header;
  background-color: var(--black);
  text-align: center;
  color: var(--white);

  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default StyledHeader;
