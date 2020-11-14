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

  ${(props) =>
    props.primary &&
    css`
      background-color: var(--primary);
      color: var(--white);
    `};
`;

export default StyledButton;
