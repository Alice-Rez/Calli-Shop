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
    width: 25px;
    transform: translateY(40%);

    /* @media ${device.tabletPortrait} {
      width: 10%;
    } */
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  nav {
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${device.tabletLandscape} {
      justify-content: space-between;
    }
  }
`;

export default StyledFooter;
