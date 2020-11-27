import styled, { css } from "styled-components";
import device from "./device";

const StyledForm = styled.form`
  width: 100%;
  max-width: var(--basket-content-width);
  margin: var(--space-medium) auto;

  [type="checkbox"] {
    margin-bottom: var(--space-large);
  }
`;

export default StyledForm;
