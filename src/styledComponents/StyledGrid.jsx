import styled, { css } from "styled-components";
import device from "./device";

const StyledGrid = styled.div`
  ${(props) =>
    props.formGrid &&
    css`
      display: grid;
      grid-template-columns: auto;
      grid-gap: var(--space-small);
      align-items: center;
      justify-content: center;
      justify-items: center;
      margin-bottom: var(--space-medium);

      @media ${device.tabletPortrait} {
        grid-template-columns: auto auto;
        grid-gap: var(--space-larger);
      }

      label {
        @media ${device.tabletPortrait} {
          justify-self: end;
        }
      }
      input,
      select {
        margin-bottom: var(--space-small);
        @media ${device.tabletPortrait} {
          justify-self: start;
        }
      }
    `}
`;

export default StyledGrid;
