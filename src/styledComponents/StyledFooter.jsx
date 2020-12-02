import device from "./device";

const { default: styled } = require("styled-components");

const StyledFooter = styled.footer`
  grid-area: footer;
  display: grid;
  justify-items: center;
  text-align: center;
  margin: var(--space-small) var(--space-medium);
  font-size: 0.8rem;

  img {
    width: 7%;
    transform: translateY(40%);
  }

  nav {
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: var(--space-small);

    @media ${device.tabletLandscape} {
      justify-content: space-between;
    }
  }
`;

export default StyledFooter;
