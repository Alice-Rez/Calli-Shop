const { default: styled } = require("styled-components");

const StyledFooter = styled.footer`
  grid-area: footer;
  text-align: center;
  margin: var(--space-small) 0;
  font-size: 0.8rem;

  img {
    width: 2%;
    transform: translateY(40%);
  }
`;

export default StyledFooter;
