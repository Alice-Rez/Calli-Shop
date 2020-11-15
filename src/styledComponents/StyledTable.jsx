import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;

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
