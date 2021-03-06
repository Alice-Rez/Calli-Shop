import styled, { css } from "styled-components";
import device from "./device";

const StyledTable = styled.table`
  width: 100%;
  max-width: var(--basket-content-width);
  border-collapse: collapse;
  margin: var(--space-large) auto;

  td:first-of-type,
  th:first-of-type {
    text-align: left;
  }

  caption {
    text-align: left;
    margin-bottom: var(--space-small);
    text-transform: uppercase;
  }

  tfoot tr,
  tfoot td {
    padding-top: calc(var(--space-small) / 2);
    font-weight: 900;
  }

  ${(props) =>
    props.orderList &&
    css`
      @media (max-width: 768px) {
        margin-top: var(--space-medium);

        tr {
          display: grid;
          grid-template-areas: "title title delete" "price qty sum";
          grid-template-columns: auto 1fr auto;
          align-items: center;
          margin-top: var(--space-small);

          td:first-of-type {
            grid-area: title;
          }

          td:last-of-type {
            grid-area: delete;
          }
        }

        tfoot tr {
          grid-template-areas: "label label" "sumTotal sumTotal";
          border-top: solid 1px var(--black);

          td:nth-of-type(3) {
            justify-self: right;
          }
        }
      }

      @media (max-width: 370px) {
        tbody tr {
          grid-template-areas: "title delete" "price price" "qty qty" "sum sum";
          grid-template-columns: 1fr auto;

          td:nth-of-type(2) {
            grid-area: price;
            justify-self: right;
          }

          td:nth-of-type(3) {
            grid-area: qty;
            justify-self: right;
          }
          td:nth-of-type(4) {
            grid-area: sum;
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
    `}

  ${(props) =>
    props.confirmation &&
    css`
      margin-top: var(--space-small);

      td:last-of-type,
      th:last-of-type {
        text-align: right;
      }

      td {
        padding: calc(var(--space-small) / 2);
      }

      th {
        padding: var(--space-small) calc(var(--space-small) / 2);
      }

      tbody tr:nth-last-of-type(2) td {
        padding-top: var(--space-small);
      }
      /* tfoot th {
        border-top: solid 1px var(--black);
      } */

      @media (max-width: 767px) {
        margin-top: var(--space-medium);

        thead {
          display: none;
        }

        tr {
          display: grid;
          grid-template-areas: "title title title" "details details details" "price qty sum";
          grid-template-columns: auto 1fr auto;
          grid-template-rows: auto auto auto;
          align-items: center;
          margin-top: var(--space-small);

          :not(:last-of-type) {
            margin-top: var(--space-larger);
          }

          td:first-of-type {
            grid-area: title;
          }

          .details {
            grid-area: details;
            text-align: right;
          }

          td:nth-last-of-type(3) {
            grid-area: price;
          }
          td:nth-last-of-type(2) {
            grid-area: qty;
          }
          td:last-of-type {
            grid-area: sum;
          }
        }

        tfoot tr {
          grid-template-areas: "label label" "sumTotal ";
          border-top: solid 1px var(--black);
        }
      }
    `}
`;

export default StyledTable;
