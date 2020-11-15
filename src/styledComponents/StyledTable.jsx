import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  max-width: var(--basket-content-width);
  border-collapse: collapse;
  margin: var(--space-large) auto;

  td:first-of-type {
    text-align: left;
  }

  tfoot tr,
  tfoot td {
    border-top: solid 1px var(--black);
    padding-top: var(--space-small);
    font-weight: 900;
  }
`;

export default StyledTable;
