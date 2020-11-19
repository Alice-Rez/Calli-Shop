import styled from "styled-components";
import device from "./device";

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
    padding-top: calc(var(--space-small) / 2);
    font-weight: 900;
  }

  @media (max-width: 768px) {
    tr {
      display: grid;
      grid-template-areas: "title title delete" "price qty sum";
      grid-template-columns: auto 1fr auto;
      align-items: center;

      td:first-of-type {
        grid-area: title;
      }

      td:last-of-type {
        grid-area: delete;
      }
    }

    tfoot tr {
      grid-template-areas: "label label" "sum sum";
      border-top: solid 1px var(--black);

      td:nth-of-type(3) {
        justify-self: right;
      }
    }
  }

  @media ${device.tabletPortrait} {
    tfoot tr,
    tfoot td {
      border-top: solid 1px var(--black);
      padding-top: var(--space-small);
      font-weight: 900;
    }
  }
`;

export default StyledTable;
