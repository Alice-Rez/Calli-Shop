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

  :hover {
    transform: scale(1.1);
  }

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
`;

export default StyledButton;
