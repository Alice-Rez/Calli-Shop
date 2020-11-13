const { default: styled } = require("styled-components");

const StyledMain = styled.main`
  grid-area: main;
  text-align: center;
  padding: var(--space-medium);

  h3 {
    text-transform: uppercase;
    font-size: 1.25rem;
  }

  p {
  }
`;

export default StyledMain;
