import styled, { css } from "styled-components";
import device from "./device";

const StyledButton = styled.button`
  border: none;
  text-transform: uppercase;
  padding: var(--space-small) var(--space-medium);
  font-family: var(--text);
  border-radius: 5px;
  letter-spacing: 0.05em;
  font-weight: 900;
  margin: var(--space-small);
  box-shadow: var(--shadow-small-darker);
  transition: transform 500ms 50ms;

  ${(props) =>
    !props.spinControl &&
    css`
      :hover {
        transform: scale(1.1);
      }
    `}

  ${(props) =>
    props.primary &&
    css`
      background-color: var(--primary);
      color: var(--white);

      :hover {
        background-color: var(--white);
        color: var(--primary);
      }
    `};

  ${(props) =>
    props.spinControl &&
    css`
      width: calc(1.4 * var(--spin-control-size));
      height: calc(1.4 * var(--spin-control-size));
      margin: var(--space-small) 0 var(--space-small);
      padding: 0;
      box-shadow: none;
      font-size: 1.15rem;
      font-weight: 900;
      background-color: var(--grey);
      color: var(--white);

      :disabled {
        background-color: transparent;
        color: black;
        border: solid 1px var(--black);
      }

      @media ${device.tabletLandscape} {
        width: var(--spin-control-size);
        height: var(--spin-control-size);
        font-size: 0.9rem;
      }
    `};
`;

export default StyledButton;
