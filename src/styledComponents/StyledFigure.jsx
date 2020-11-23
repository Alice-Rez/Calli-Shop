import styled, { css } from "styled-components";

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

      [class^="number"],
      [class^="text"] {
        line-height: 1.25px;
      }

      [class^="text"] tspan {
        text-align: center;
        font-size: 8px;
      }

      .hidden {
        display: none;
      }
    `}
`;

export default StyledFigure;
