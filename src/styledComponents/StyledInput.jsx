import styled, { css } from "styled-components";
import device from "./device";

const StyledInput = styled.input`
  font-family: var(--text);
  border: none;

  ${(props) =>
    props.spinControl &&
    css`
      width: 40px;
      height: calc(1.4 * var(--spin-control-size));
      text-align: center;
      font-size: 1.1rem;
      font-weight: 900;

      @media ${device.tabletLandscape} {
        width: 30px;
        width: var(--spin-control-size);
        height: var(--spin-control-size);
        font-size: 0.9rem;
      }
    `}
`;

export default StyledInput;
