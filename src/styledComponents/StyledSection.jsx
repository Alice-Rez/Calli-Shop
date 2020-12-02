import styled, { css } from "styled-components";
import device from "./device";

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

      h4 {
        text-transform: uppercase;
        color: var(--primary-dark);
      }
    `}

  ${(props) =>
    props.orderDetails &&
    css`
      margin-bottom: var(--space-large);

      p:nth-of-type(2) {
        margin-bottom: var(--space-larger);
      }
    `}

    ${(props) =>
    props.detailsRow &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-medium);

      @media (min-width: 768px) {
        flex-direction: row;

        input {
          margin-right: var(--space-medium);
        }
      }

      label {
        margin-bottom: var(--space-small);
      }

      input,
      select {
        margin-bottom: var(--space-medium);
      }
    `}

    ${(props) =>
    props.confirmation &&
    css`
      width: 100%;
      max-width: var(--basket-content-width);
      text-align: left;

      h5 {
        font-size: 1rem;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: var(--space-small);
      }

      p {
        margin-top: 0;
      }
    `}

    ${(props) =>
    props.license &&
    css`
      width: 90%;
      max-width: 480px;
      text-align: left;
      font-family: monospace;
      margin-bottom: var(--space-larger);
    `}
`;

export default StyledSection;
