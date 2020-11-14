import device from "./device";

const { default: styled } = require("styled-components");

const StyledFooter = styled.footer`
  grid-area: footer;
  text-align: center;
  margin: var(--space-small) var(--space-medium);
  font-size: 0.8rem;

  img {
    width: 7%;
    transform: translateY(40%);

    @media ${device.tabletLandscape} {
      width: 2%;
      transform: translateY(40%);
    }
  }
`;

export default StyledFooter;
