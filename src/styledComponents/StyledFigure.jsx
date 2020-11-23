import styled, { css } from "styled-components";
import device from "./device";

const StyledFigure = styled.figure`
  ${(props) =>
    props.header &&
    css`
      display: grid;
      place-items: center;

      img {
        width: 100%;
        max-width: 500px;

        @media screen and (min-width: 500px) and (max-height: 850px) {
          max-width: 350px;
        }
      }
    `}

  ${(props) =>
    props.stepper &&
    css`
      width: 100%;
      max-width: var(--basket-content-width);

      @media ${device.tabletLandscape} {
        max-width: calc(0.7 * var(--basket-content-width));
      }

      .desktop {
        display: none;

        @media ${device.tabletPortrait} {
          display: block;
        }
      }

      .mobile {
        @media ${device.tabletPortrait} {
          display: none;
        }
      }

      [class^="number"],
      [class^="text"] {
        line-height: 1.25rem;
      }

      [class^="text"] tspan {
        text-align: center;
        font-size: 9px;

        @media ${device.tabletPortrait} {
          font-size: 6px;
        }

        @media ${device.tabletLandscape} {
          font-size: 7px;
        }
      }
    `}
`;

export default StyledFigure;
