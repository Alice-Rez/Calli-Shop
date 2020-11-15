import styled, { css } from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.basket &&
    css`
      width: 100%;
      max-width: var(--basket-content-width);
    `}
`;

export default StyledFlex;
