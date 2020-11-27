import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: var(--space-large);

  legend {
    margin-bottom: var(--space-medium);
    text-transform: uppercase;
  }

  label {
    width: 180px;
    box-shadow: var(--shadow-big);
    padding: var(--space-medium);
    margin-bottom: var(--space-small);
    display: grid;
    justify-items: center;
    align-content: center;
  }

  img {
    height: 20px;
  }

  .dhl {
    height: 15px;
  }

  .pick-up,
  .paypal {
    height: 25px;
  }

  .cash {
    height: 30px;
  }

  input {
    margin-bottom: var(--space-small);
  }

  span {
    margin-left: var(--space-small);
  }

  small {
    font-size: 0.7rem;
  }
`;

export default StyledFieldset;
