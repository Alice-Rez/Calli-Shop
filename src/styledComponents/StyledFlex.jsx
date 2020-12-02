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

  ${(props) =>
    props.aboutUs &&
    css`
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-larger);
      div {
        max-width: 400px;

        @media ${device.tabletPortrait} {
          margin-left: var(--space-medium);
        }
      }

      img {
        width: 70%;
        max-width: 250px;
        border-radius: 50%;
        shape-outside: circle(50%);
      }
    `}
`;

export default StyledFlex;
