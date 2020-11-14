import styled, { css } from "styled-components";

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
      width: var(--spin-control-size);
      height: var(--spin-control-size);
      margin: 0;
      padding: 0;
      box-shadow: none;
      font-size: 0.9rem;
      font-weight: 900;
    `};
`;

export default StyledButton;
