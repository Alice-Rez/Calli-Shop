import styled from "styled-components";

const StyledNav = styled.nav`
  height: 80px;
  grid-area: nav;
  position: sticky;
  top: 0;
  padding: var(--space-medium);
  padding-top: var(--space-small);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: white; */
`;

export default StyledNav;
