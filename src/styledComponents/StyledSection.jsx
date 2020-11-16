import styled, { css } from "styled-components";

const StyledSection = styled.section`
  ${(props) =>
    props.basket &&
    css`
      width: 90%;
      max-width: 1000px;
      box-shadow: var(--shadow-big);
      margin: auto;
      padding: var(--space-medium);
      display: grid;
      place-items: center;
    `}

  ${(props) =>
    props.orderDetails &&
    css`
      margin-bottom: var(--space-large);

      p:last-of-type {
        margin-bottom: var(--space-larger);
      }
    `}
`;

export default StyledSection;
