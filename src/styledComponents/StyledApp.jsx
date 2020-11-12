import styled from "styled-components";
import device from "./device";

const StyledApp = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "nav" "main" "footer";

  @media ${device.tabletLandscape} {
    grid-template-areas: "header nav" "header main" "header footer";
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
  }
`;

export default StyledApp;
