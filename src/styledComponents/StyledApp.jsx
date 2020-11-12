import styled from "styled-components";
import device from "./device";

const StyledApp = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "main" "footer";

  @media ${device.tabletLandscape} {
    grid-template-areas: "header main" "header footer";
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr auto;
  }
`;

export default StyledApp;
