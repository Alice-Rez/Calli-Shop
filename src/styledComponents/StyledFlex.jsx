import styled, { css } from "styled-components";
import device from "./device";

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;

  ${(props) =>
    props.basket &&
    css`
      width: 100%;
      max-width: var(--basket-content-width);

      @media ${device.tabletPortrait} {
        justify-content: space-between;
      }
    `}
`;

export default StyledFlex;
