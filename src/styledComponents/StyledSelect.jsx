import styled from "styled-components";

const StyledSelect = styled.select`
  font-family: var(--text);
  box-shadow: var(--shadow-small-darker);
  margin: auto var(--space-small);
  padding: var(--space-small);
  background-color: white;
  border: none;
  width: 150px;

  option {
    padding: var(--space-small);
  }
`;

export default StyledSelect;
